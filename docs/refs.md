# refs

## tools

- [md2pdf](https://md2file.com/editor/)
- [pandoc](https://pandoc.org/installing.html#macos)
  - ```bash
    pandoc \
      ./23127065-report.md ./appendix/*.md \
      --toc --pdf-engine=weasyprint \
      --css ../pandoc/report.css \
      -o 23127065-report.pdf
    ```
  - ```bash
    ./scripts/md2pdf.sh hw01
    ```

## misc

```
git log --graph --all --stat
```
