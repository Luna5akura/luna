import { lazy } from "react";
import type { ComponentType, LazyExoticComponent } from "react";
import Home from "@/pages/Home";

type RouteComponent = ComponentType | LazyExoticComponent<ComponentType>;

export type SiteRoute = {
  path: string;
  Component: RouteComponent;
  hideChrome?: boolean;
  hideCursor?: boolean;
};

export type NavRoute = {
  label: string;
  path: string;
};

const warpPage = lazy(() => import("@/pages/Warp"));
const wowPage = lazy(() => import("@/pages/Wow"));
const witPage = lazy(() => import("@/pages/Wit"));
const lifecodePage = lazy(() => import("@/pages/Lifecode"));
const sparkPage = lazy(() => import("@/pages/Spark"));
const randomFontPage = lazy(() => import("@/pages/RandomFont"));
const shogiKifuPage = lazy(() => import("@/pages/ShogiKifu"));
const postDetailsPage = lazy(() => import("@/pages/PostDetails"));

export const siteRoutes: SiteRoute[] = [
  { path: "/", Component: Home },
  { path: "/warp", Component: warpPage },
  { path: "/wow", Component: wowPage },
  { path: "/wit", Component: witPage },
  { path: "/lifecode", Component: lifecodePage },
  { path: "/spark", Component: sparkPage, hideChrome: true, hideCursor: true },
  { path: "/random-font", Component: randomFontPage },
  { path: "/shogi", Component: shogiKifuPage, hideCursor: true },
  { path: "/posts/*", Component: postDetailsPage },
];

export const navRoutes: NavRoute[] = [
  { label: "World", path: "/" },
  { label: "Warp", path: "/warp" },
  { label: "Wit", path: "/wit" },
  { label: "Wow", path: "/wow" },
  { label: "Shogi", path: "/shogi" },
];

const getCurrentRoute = (pathname: string) => {
  return siteRoutes.find((route) => {
    if (route.path.endsWith("/*")) {
      return pathname.startsWith(route.path.slice(0, -1));
    }

    return route.path === pathname;
  });
};

export const shouldHideSiteChrome = (pathname: string) => Boolean(getCurrentRoute(pathname)?.hideChrome);

export const shouldHideCustomCursor = (pathname: string) => Boolean(getCurrentRoute(pathname)?.hideCursor);
