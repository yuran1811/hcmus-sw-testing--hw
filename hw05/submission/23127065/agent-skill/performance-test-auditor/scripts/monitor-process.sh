#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 2 || $# -gt 3 ]]; then
  echo "Usage: $0 <pid> <output.csv> [interval-seconds]" >&2
  exit 64
fi

pid=$1
output=$2
interval=${3:-5}

kill -0 "$pid" 2>/dev/null || { echo "Process is not running: $pid" >&2; exit 66; }
[[ ! -e "$output" ]] || { echo "Refusing to overwrite existing monitor CSV: $output" >&2; exit 73; }
mkdir -p "$(dirname "$output")"
echo "timestamp,pid,rss_kb,cpu_percent" > "$output"

while kill -0 "$pid" 2>/dev/null; do
  metrics=$(ps -o rss= -o %cpu= -p "$pid" | awk '{$1=$1; print}')
  [[ -n "$metrics" ]] || break
  rss=${metrics%% *}
  cpu=${metrics##* }
  printf '%s,%s,%s,%s\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)" "$pid" "$rss" "$cpu" >> "$output"
  sleep "$interval"
done
