#!/usr/bin/env python3
"""Compatibility entry point for thesis artifacts.

Run this file after ``analyze_data.py`` to generate every matplotlib figure
and LaTeX table used by ``graduate_paper.tex``.
"""

from plot_model_comparison import main


if __name__ == "__main__":
    main()
