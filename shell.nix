{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = with pkgs; [
    texliveFull
    perl
    ghostscript
    poppler-utils
    xdg-utils
    (python3.withPackages (ps: with ps; [
      pandas
      numpy
      scipy
      matplotlib
      seaborn
      odfpy
      jupyterlab
    ]))
  ];

  shellHook = ''
    export MPLBACKEND=Agg
    echo
    echo "LaTeX + Python shell ready."
    echo "Compile once:"
    echo "  latexmk -xelatex '公司治理影响公司财务风险吗_汇报PPT.tex'"
    echo
    echo "Live rebuild:"
    echo "  latexmk -xelatex -pvc '公司治理影响公司财务风险吗_汇报PPT.tex'"
    echo
    echo "Run outpatient data analysis:"
    echo "  python 'src/posts/Business Paper/Graduate/analyze_data.py'"
    echo
    echo "Generate thesis figures:"
    echo "  python 'src/posts/Business Paper/Graduate/make_figures.py'"
    echo
    echo "Generate matplotlib comparison figures:"
    echo "  python 'src/posts/Business Paper/Graduate/plot_model_comparison.py'"
    echo
  '';
}
