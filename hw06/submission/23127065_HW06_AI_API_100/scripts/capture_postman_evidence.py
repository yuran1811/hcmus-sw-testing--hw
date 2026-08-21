#!/usr/bin/env python3
import sys
import os
import subprocess
import Quartz

OUT_DIR = "/Users/lap15045/@repos/hcmus-sw-testing--hw/hw06/submission/23127065_HW06_AI_API_100/evidence/postman"
os.makedirs(OUT_DIR, exist_ok=True)

TARGETS = {
    "1": ("01-workspace-collection.png", "Workspace & Collection Sidebar", "main"),
    "2": ("02-environment-variables.png", "Environment Variables Tab", "main"),
    "3": ("03-prerequest-script.png", "Pre-request Script (X-Student-Id)", "main"),
    "4": ("04-console-student-header.png", "Postman Console (X-Student-Id Header)", "console"),
    "5": ("05-collection-runner-data.png", "Collection Runner Data Configuration", "main"),
    "6": ("06-runner-execution-results.png", "Runner Execution Results (40 iterations)", "main"),
}

def get_postman_windows():
    windows = Quartz.CGWindowListCopyWindowInfo(Quartz.kCGWindowListOptionAll, 0)
    res = {"main": None, "console": None, "all": []}
    for w in windows:
        owner = w.get('kCGWindowOwnerName', '')
        if 'Postman' in owner or 'postman' in owner.lower():
            num = w.get('kCGWindowNumber')
            name = w.get('kCGWindowName', '') or ''
            bounds = w.get('kCGWindowBounds', {})
            width = bounds.get('Width', 0)
            height = bounds.get('Height', 0)
            if width > 400 and height > 200:
                res["all"].append((num, name, width, height))
                if "console" in name.lower():
                    res["console"] = num
                elif width > 800 and not res["main"]:
                    res["main"] = num
    if not res["console"] and res["all"]:
        for num, name, w, h in res["all"]:
            if num != res["main"]:
                res["console"] = num
                break
    return res

def capture(key):
    if key not in TARGETS:
        print(f"Unknown key '{key}'. Available: {list(TARGETS.keys())}")
        return False
    
    filename, desc, wtype = TARGETS[key]
    out_path = os.path.join(OUT_DIR, filename)
    wins = get_postman_windows()
    win_id = wins.get(wtype) or wins.get("main")
    
    if not win_id and wins["all"]:
        win_id = wins["all"][0][0]
        
    if not win_id:
        print("Error: No Postman window found!")
        return False
        
    print(f"Capturing [{key}] '{desc}' from Window {win_id} -> {filename}...")
    subprocess.run(["screencapture", f"-l{win_id}", out_path], check=True)
    size = os.path.getsize(out_path)
    print(f"✓ Saved {filename} ({size:,} bytes)")
    return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python capture_postman_evidence.py <1-6|all>")
        sys.exit(1)
        
    arg = sys.argv[1]
    if arg == "all":
        for k in sorted(TARGETS.keys()):
            capture(k)
    else:
        capture(arg)
