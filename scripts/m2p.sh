#!/usr/bin/env bash

set -euo pipefail

if [ -z "${1:-}" ]; then
    echo "Usage: $0 <markdown-file>"
    exit 1
fi

file_path="$1"

if [ ! -f "$file_path" ]; then
    echo "Error: File '$file_path' does not exist."
    exit 1
fi

# Resolve directories and paths
dir_path="$(dirname "$file_path")"
file_name="$(basename "$file_path")"
output_name="${file_name%.md}.pdf"

# Resolve absolute path for the CSS file relative to this script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
CSS_PATH="$PROJECT_ROOT/pandoc/report.css"

echo "Generating ${dir_path}/${output_name} from $file_path ..."

# Navigate to the file's directory in a subshell so relative resources (like images) resolve correctly
(
    cd "$dir_path"
    pandoc \
        "$file_name" \
        --toc --pdf-engine=weasyprint \
        --css "$CSS_PATH" \
        -o "$output_name"
)

echo "Done!"