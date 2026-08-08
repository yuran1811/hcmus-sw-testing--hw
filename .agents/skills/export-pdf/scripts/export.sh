#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../.." && pwd)"
chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [[ ! -x "$chrome" ]] && command -v google-chrome >/dev/null 2>&1; then
  chrome="$(command -v google-chrome)"
fi
work_dir="$(mktemp -d "${TMPDIR:-/tmp}/osg-pdf-export.XXXXXX")"
node_binary="$(command -v node || true)"
if [[ -z "$node_binary" ]] || ! "$node_binary" --version >/dev/null 2>&1; then
  for candidate in "$HOME"/.volta/tools/image/node/*/bin/node; do
    if [[ -x "$candidate" ]]; then
      node_binary="$candidate"
    fi
  done
fi

if [[ -z "$node_binary" ]] || ! "$node_binary" --version >/dev/null 2>&1; then
  echo "A working Node.js binary is required." >&2
  exit 1
fi
node_directory="$(dirname "$node_binary")"

cleanup() {
  rtk rm -rf "$work_dir"
}
trap cleanup EXIT

if [[ ! -x "$chrome" ]]; then
  echo "Google Chrome is required (macOS application or google-chrome on PATH)." >&2
  exit 1
fi

usage() {
  cat <<'EOF'
Usage:
  export.sh <source.md|source.html> <output.pdf> [language]
  export.sh --osg-task-plans
EOF
}

absolute_existing_file() {
  local path="$1"
  local directory
  directory="$(cd "$(dirname "$path")" && pwd)"
  printf '%s/%s\n' "$directory" "$(basename "$path")"
}

absolute_output_file() {
  local path="$1"
  local directory
  directory="$(cd "$(dirname "$path")" && pwd)"
  printf '%s/%s\n' "$directory" "$(basename "$path")"
}

render_markdown() {
  local source="$1"
  local language="$2"
  local name="$3"
  local body="$work_dir/$name-body.html"
  local html="$work_dir/$name.html"
  local source_directory

  source_directory="$(cd "$(dirname "$source")" && pwd)"

  PATH="$node_directory:$PATH" rtk bunx --yes marked --gfm -i "$source" -o "$body" >&2
  if [[ ! -s "$body" ]]; then
    echo "Markdown rendering produced no HTML body: $source" >&2
    exit 1
  fi
  rtk bun -e 'const [body, output, language, sourceDirectory] = Bun.argv.slice(1); const baseUrl = new URL(`file://${sourceDirectory}/`).href; const css = `@page { size: A4; margin: 15mm 13mm 17mm; } body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; color: #1f2937; font-size: 9.4pt; line-height: 1.38; } h1 { font-size: 18pt; color: #0f172a; border-bottom: 2px solid #2563eb; padding-bottom: 5px; margin-inline: 0; overflow-wrap: anywhere; } h2 { font-size: 15pt; color: #1d4ed8; border-bottom: 1px solid #bfdbfe; padding-bottom: 3px; margin-top: 24px; break-after: avoid; } h3 { font-size: 11.5pt; color: #1e3a8a; margin-top: 18px; break-after: avoid; } h4 { font-size: 10.3pt; margin-top: 14px; break-after: avoid; } table { width: 100%; border-collapse: collapse; margin: 8px 0 13px; font-size: 8.2pt; } th, td { border: 1px solid #cbd5e1; padding: 4px 5px; vertical-align: top; } th { background: #eff6ff; color: #0f172a; } tr { break-inside: avoid; } img { display: block; max-width: 100%; height: auto; margin: 10px 0; break-inside: avoid; } pre { white-space: pre-wrap; overflow-wrap: anywhere; background: #f8fafc; border: 1px solid #e2e8f0; padding: 8px; font-size: 7.6pt; } code { font-family: "SFMono-Regular", Menlo, Consolas, monospace; font-size: .92em; overflow-wrap: anywhere; } a { color: #1d4ed8; text-decoration: none; } blockquote { margin: 10px 0; padding: 7px 10px; border-left: 3px solid #60a5fa; background: #f8fafc; } li { break-inside: avoid; }`; const content = await Bun.file(body).text(); await Bun.write(output, `<!doctype html><html lang="${language}"><head><meta charset="utf-8"><base href="${baseUrl}"><style>${css}</style></head><body>${content}</body></html>`);' "$body" "$html" "$language" "$source_directory"

  printf '%s\n' "$html"
}

validate_pdf() {
  local output="$1"
  local size
  if stat -c '%s' "$output" >/dev/null 2>&1; then
    size="$(stat -c '%s' "$output")"
  else
    size="$(stat -f '%z' "$output")"
  fi
  rtk pdftotext "$output" "$work_dir/validation.txt"
  if [[ ! -s "$output" ]] || [[ "$size" -lt 10000 ]] || [[ ! -s "$work_dir/validation.txt" ]] || ! rtk proxy file "$output" | rtk proxy grep -q 'PDF document'; then
    echo "Invalid PDF output: $output" >&2
    exit 1
  fi
}

export_one() {
  local source="$1"
  local output="$2"
  local language="$3"
  local name
  local html

  if [[ ! -f "$source" ]]; then
    echo "Missing source: $source" >&2
    exit 1
  fi

  case "$source" in
    *.md)
      name="$(basename "${source%.md}")"
      html="$(render_markdown "$source" "$language" "$name")" || exit $?
      rtk proxy "$chrome" --headless --no-sandbox --disable-gpu --no-pdf-header-footer --print-to-pdf="$output" "file://$html"
      ;;
    *.html|*.htm)
      rtk proxy "$chrome" --headless --no-sandbox --disable-gpu --no-pdf-header-footer --print-to-pdf="$output" "file://$source"
      ;;
    *)
      echo "Unsupported source type: $source (expected Markdown or HTML)" >&2
      exit 1
      ;;
  esac

  validate_pdf "$output"
  printf '%s\n' "$output"
}

if [[ "${1:-}" == "--osg-task-plans" && "$#" -eq 1 ]]; then
  source_en="$repo_root/docs/osg-sdk-tasks.en.md"
  source_vi="$repo_root/docs/osg-sdk-tasks.vi.md"
  output_en="$repo_root/docs/osg-tasks-en.pdf"
  output_vi="$repo_root/docs/osg-tasks-vi.pdf"

  export_one "$source_en" "$output_en" en >/dev/null
  export_one "$source_vi" "$output_vi" vi >/dev/null
  printf 'Exported:\n%s\n%s\n' "$output_en" "$output_vi"
  exit 0
fi

if [[ "$#" -lt 2 || "$#" -gt 3 ]]; then
  usage >&2
  exit 1
fi

source="$(absolute_existing_file "$1")"
output="$(absolute_output_file "$2")"
language="${3:-}"

if [[ -z "$language" ]]; then
  case "$(basename "$source")" in
    *.vi.md|*.vi.html|*.vi.htm) language="vi" ;;
    *) language="en" ;;
  esac
fi

export_one "$source" "$output" "$language"
