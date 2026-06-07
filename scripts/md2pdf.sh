#!/usr/bin/env bash

set -euo pipefail

cd ./$1
pandoc \
	./23127065-report.md ./pages/*.md ./pages/appendices/*.md \
	--toc --pdf-engine=weasyprint \
	--css ../pandoc/report.css \
	-o ./23127065-report.pdf

for file in ./pages/*.md; do
    [ -f "$file" ] || continue

    output="${file%.md}.pdf"

    echo "Generating $output ..."

    pandoc \
        "$file" \
        --toc --pdf-engine=weasyprint \
        --css ../pandoc/report.css \
        -o "$output"
done

echo "Done!"
cd ..