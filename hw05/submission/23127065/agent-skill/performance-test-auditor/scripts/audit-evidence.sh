#!/usr/bin/env bash
set -euo pipefail

root=${1:-.}
student_id=${STUDENT_ID:-23127065}
date_pattern='[0-9]{8}'
missing=0

check_file() {
  if [[ -s "$root/$1" ]]; then echo "OK      $1"; else echo "MISSING $1"; missing=1; fi
}

for scenario in Load Stress Spike; do
  plan=$(find "$root/test-plans" -maxdepth 1 -type f -name "${student_id}_${scenario}_*.jmx" -print -quit 2>/dev/null || true)
  if [[ "$plan" =~ ${student_id}_${scenario}_${date_pattern}\.jmx$ ]]; then
    echo "OK      ${plan#"$root/"}"
  else
    echo "MISSING test-plans/${student_id}_${scenario}_YYYYMMDD.jmx"
    missing=1
  fi
  check_file "results/${scenario,,}.jtl"
  check_file "reports/${scenario,,}/index.html"
done

for file in README.md Main_Report.md Main_Report.pdf AI_Audit_Report.md AI_Audit_Report.pdf AI_Critique.md AI_Critique.pdf Bug_Report.md Git_Commit_Log.txt; do
  check_file "$file"
done
check_file "results/endurance.jtl"
check_file "evidence/hardware/hardware-spec.png"
check_file "evidence/load/tool-and-resource-monitor.png"
check_file "evidence/stress/tool-and-resource-monitor.png"
check_file "evidence/spike/tool-and-resource-monitor.png"

exit "$missing"
