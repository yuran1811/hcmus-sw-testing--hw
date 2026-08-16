#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 4 ]]; then
  echo "Usage: $0 <jmeter-bin> <plan.jmx> <result.jtl> <report-dir> [JMeter args...]" >&2
  exit 64
fi

jmeter_bin=$1
plan=$2
result=$3
report_dir=$4
shift 4
jmeter_log=${result%.jtl}.jmeter.log

[[ -x "$jmeter_bin" ]] || { echo "JMeter binary is not executable: $jmeter_bin" >&2; exit 66; }
[[ -f "$plan" ]] || { echo "JMX plan not found: $plan" >&2; exit 66; }
[[ ! -e "$result" ]] || { echo "Refusing to overwrite existing JTL: $result" >&2; exit 73; }
[[ ! -e "$jmeter_log" ]] || { echo "Refusing to overwrite existing JMeter log: $jmeter_log" >&2; exit 73; }
[[ ! -e "$report_dir" ]] || { echo "Report directory must not exist: $report_dir" >&2; exit 73; }

mkdir -p "$(dirname "$result")" "$(dirname "$report_dir")"
"$jmeter_bin" -n -t "$plan" -l "$result" -j "$jmeter_log" -e -o "$report_dir" \
  -Jjmeter.reportgenerator.temp_dir="${report_dir}.tmp" "$@"

[[ -s "$result" ]] || { echo "JMeter produced an empty JTL: $result" >&2; exit 65; }
[[ -s "$report_dir/index.html" ]] || { echo "HTML dashboard missing index.html: $report_dir" >&2; exit 65; }
echo "Verified: $result and $report_dir/index.html"
