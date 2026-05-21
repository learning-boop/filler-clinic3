#!/usr/bin/env python3
"""
Convert all PNG/JPG assets in /public/assets to WebP.
- Quality 82 (excellent perceived quality, ~1/5 the size)
- Resize images wider than MAX_WIDTH to MAX_WIDTH preserving aspect
- Logo gets special treatment (max 512px wide, preserve transparency)
- Originals are deleted to save bandwidth on deploy
"""
import os
import sys
from PIL import Image

ASSETS_DIR = "public/assets"
MAX_WIDTH = 1600          # general ceiling
LOGO_MAX_WIDTH = 512      # logo is much smaller on screen
QUALITY = 82              # WebP quality
LOGO_QUALITY = 90         # higher quality for logo

# Files to leave alone (already small, or special)
SKIP = set()

def convert(path):
    fname = os.path.basename(path)
    base, ext = os.path.splitext(fname)
    out = os.path.join(os.path.dirname(path), base + ".webp")

    with Image.open(path) as img:
        original_size = os.path.getsize(path)
        w, h = img.size

        # Determine target width
        is_logo = "logo" in base.lower()
        max_w = LOGO_MAX_WIDTH if is_logo else MAX_WIDTH
        quality = LOGO_QUALITY if is_logo else QUALITY

        # Resize if needed
        if w > max_w:
            new_h = int(h * max_w / w)
            img = img.resize((max_w, new_h), Image.LANCZOS)
            print(f"  → resized {w}x{h} → {max_w}x{new_h}")

        # Keep alpha for PNG inputs, drop for JPG
        if ext.lower() == ".png" and img.mode in ("RGBA", "LA", "P"):
            if img.mode == "P":
                img = img.convert("RGBA")
            save_kwargs = {"quality": quality, "method": 6, "lossless": False}
        else:
            if img.mode != "RGB":
                img = img.convert("RGB")
            save_kwargs = {"quality": quality, "method": 6}

        img.save(out, "WEBP", **save_kwargs)

    new_size = os.path.getsize(out)
    pct = (1 - new_size / original_size) * 100
    print(f"  {fname:<28} {original_size//1024:>5} KB  →  "
          f"{os.path.basename(out):<28} {new_size//1024:>5} KB  ({pct:>5.1f}% smaller)")
    return original_size, new_size


def main():
    if not os.path.isdir(ASSETS_DIR):
        print(f"Error: {ASSETS_DIR} not found")
        sys.exit(1)

    total_before = 0
    total_after = 0
    converted = 0

    for fname in sorted(os.listdir(ASSETS_DIR)):
        path = os.path.join(ASSETS_DIR, fname)
        ext = os.path.splitext(fname)[1].lower()
        if ext not in (".png", ".jpg", ".jpeg"):
            continue
        if fname in SKIP:
            continue

        try:
            before, after = convert(path)
            total_before += before
            total_after += after
            converted += 1
            # delete original now that webp exists
            os.remove(path)
        except Exception as e:
            print(f"  ✗ {fname}: {e}")

    print()
    print(f"Converted: {converted} files")
    print(f"Before:    {total_before // 1024 // 1024} MB")
    print(f"After:     {total_after // 1024 // 1024} MB")
    if total_before > 0:
        print(f"Saved:     {(total_before - total_after) // 1024 // 1024} MB"
              f"  ({(1 - total_after/total_before)*100:.1f}% reduction)")


if __name__ == "__main__":
    main()
