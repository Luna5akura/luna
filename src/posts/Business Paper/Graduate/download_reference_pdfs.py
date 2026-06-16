#!/usr/bin/env python3
import csv
import json
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
BIB_PATH = ROOT / "references.bib"
OUT_DIR = ROOT / "reference_pdfs"
MANIFEST = OUT_DIR / "download_manifest.csv"

USER_AGENT = "Mozilla/5.0 reference-downloader/1.0 (legal-open-access-check)"


def parse_bib_entries(text):
    entries = []
    pattern = re.compile(r"@(?P<type>\w+)\s*\{\s*(?P<key>[^,]+),(?P<body>.*?)(?=^@\w+\s*\{|\Z)", re.S | re.M)
    field_pattern = re.compile(r"^\s*(\w+)\s*=\s*\{(.*?)\}\s*,?\s*$", re.S | re.M)
    for match in pattern.finditer(text):
        body = match.group("body")
        fields = {}
        for field, value in field_pattern.findall(body):
            cleaned = re.sub(r"\s+", " ", value).strip()
            cleaned = cleaned.replace("{", "").replace("}", "")
            fields[field.lower()] = cleaned
        entries.append(
            {
                "key": match.group("key").strip(),
                "type": match.group("type").strip(),
                "title": fields.get("title", ""),
                "year": fields.get("year", ""),
                "doi": fields.get("doi", "").strip(),
            }
        )
    return entries


def safe_name(text):
    text = re.sub(r"[^\w\u4e00-\u9fff.-]+", "_", text, flags=re.U)
    text = re.sub(r"_+", "_", text).strip("_.")
    return text[:120] or "reference"


def request_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT, "Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))


def fetch_openalex_by_doi(doi):
    encoded = urllib.parse.quote(doi, safe="")
    return request_json(f"https://api.openalex.org/works/doi:{encoded}")


def fetch_openalex_by_title(title):
    params = urllib.parse.urlencode({"search": title, "per-page": 1})
    data = request_json(f"https://api.openalex.org/works?{params}")
    results = data.get("results") or []
    return results[0] if results else None


def candidate_pdf_urls(work):
    urls = []

    def add(url):
        if url and url not in urls:
            urls.append(url)

    open_access = work.get("open_access") or {}
    add(open_access.get("oa_url"))

    best = work.get("best_oa_location") or {}
    add(best.get("pdf_url"))
    add(best.get("landing_page_url") if str(best.get("landing_page_url", "")).lower().endswith(".pdf") else None)

    primary = work.get("primary_location") or {}
    if primary.get("is_oa"):
        add(primary.get("pdf_url"))
        add(primary.get("landing_page_url") if str(primary.get("landing_page_url", "")).lower().endswith(".pdf") else None)

    for loc in work.get("locations") or []:
        if loc.get("is_oa"):
            add(loc.get("pdf_url"))
            add(loc.get("landing_page_url") if str(loc.get("landing_page_url", "")).lower().endswith(".pdf") else None)

    return urls


def download_pdf(url, dest):
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": USER_AGENT,
            "Accept": "application/pdf,text/html;q=0.8,*/*;q=0.5",
        },
    )
    with urllib.request.urlopen(req, timeout=45) as resp:
        data = resp.read()
    if data.startswith(b"%PDF"):
        dest.write_bytes(data)
        return True, "pdf"
    # Some servers prepend whitespace or a short binary marker before %PDF.
    first_pdf = data[:1024].find(b"%PDF")
    if first_pdf >= 0:
        dest.write_bytes(data[first_pdf:])
        return True, "pdf-offset"
    return False, f"not-pdf:{data[:40]!r}"


def main():
    OUT_DIR.mkdir(exist_ok=True)
    entries = parse_bib_entries(BIB_PATH.read_text(encoding="utf-8"))
    rows = []

    for index, entry in enumerate(entries, start=1):
        key = entry["key"]
        title = entry["title"]
        doi = entry["doi"]
        status = "not_found"
        source = ""
        filename = ""
        note = ""

        print(f"[{index}/{len(entries)}] {key}")
        try:
            work = fetch_openalex_by_doi(doi) if doi else fetch_openalex_by_title(title)
            if not work:
                status = "not_found"
                note = "OpenAlex returned no work"
            else:
                source = work.get("id", "")
                if not doi:
                    doi = (work.get("doi") or "").replace("https://doi.org/", "")
                urls = candidate_pdf_urls(work)
                if not urls:
                    status = "no_oa_pdf"
                    note = "No open-access PDF URL reported by OpenAlex"
                else:
                    dest = OUT_DIR / f"{index:02d}_{safe_name(key)}.pdf"
                    errors = []
                    for url in urls:
                        try:
                            ok, reason = download_pdf(url, dest)
                            if ok:
                                status = "downloaded"
                                filename = dest.name
                                source = url
                                note = reason
                                break
                            errors.append(f"{url} => {reason}")
                        except Exception as exc:
                            errors.append(f"{url} => {type(exc).__name__}: {exc}")
                    if status != "downloaded":
                        status = "download_failed"
                        note = " | ".join(errors)[:1000]
        except urllib.error.HTTPError as exc:
            status = "lookup_failed"
            note = f"HTTPError {exc.code}: {exc.reason}"
        except urllib.error.URLError as exc:
            status = "lookup_failed"
            note = f"URLError: {exc.reason}"
        except Exception as exc:
            status = "lookup_failed"
            note = f"{type(exc).__name__}: {exc}"

        rows.append(
            {
                "index": index,
                "key": key,
                "title": title,
                "year": entry["year"],
                "doi": doi,
                "status": status,
                "file": filename,
                "source": source,
                "note": note,
            }
        )
        time.sleep(0.2)

    with MANIFEST.open("w", encoding="utf-8", newline="") as fh:
        writer = csv.DictWriter(
            fh,
            fieldnames=["index", "key", "title", "year", "doi", "status", "file", "source", "note"],
        )
        writer.writeheader()
        writer.writerows(rows)

    counts = {}
    for row in rows:
        counts[row["status"]] = counts.get(row["status"], 0) + 1
    print(json.dumps(counts, ensure_ascii=False, indent=2))
    print(f"Manifest: {MANIFEST}")


if __name__ == "__main__":
    main()
