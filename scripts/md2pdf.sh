cd ./$1
pandoc \
	./23127065-report.md ./pages/*.md ./pages/appendices/*.md \
	--toc --pdf-engine=weasyprint \
	--css ../pandoc/report.css \
	-o ./23127065-report.pdf
cd ..