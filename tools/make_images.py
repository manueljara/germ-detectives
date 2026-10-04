"""
Prepare a book's pictures for the website.

Usage (from inside the website folder):

  Finished pages (the pages with the text inside the picture):
    python tools/make_images.py "C:\\path\\to\\Book2_Water_microorganisms\\Book2_ready" book2

  Front cover for the library (from the front/back cover spread):
    python tools/make_images.py "C:\\path\\to\\Book2_Water_microorganisms" book2 --cover

What it does:
  • Pages: takes Page_1.png, Page_2.png ... (or 1.png, 2.png ...) and saves
    img/book2/print/p1-960.webp, p1-1600.webp and p1-2400.webp (and so on).
    The largest size keeps the words sharp on high-resolution screens.
  • --cover: takes the front/back cover spread (any .png with "front" in its name),
    keeps the right half (the front cover), and saves img/covers/book2.webp and
    img/covers/book2-420.webp.

Needs Python 3 and Pillow:  pip install pillow
"""
import re
import sys
from pathlib import Path

from PIL import Image

args = [a for a in sys.argv[1:] if not a.startswith("--")]
cover_mode = "--cover" in sys.argv
if len(args) != 2:
    sys.exit(__doc__)

source = Path(args[0])
book_id = args[1]
site = Path(__file__).resolve().parent.parent


def page_number(path):
    m = re.fullmatch(r"(?:page_?)?(\d+)", path.stem, flags=re.I)
    return int(m.group(1)) if m else None


def load_rgb(path):
    im = Image.open(path)
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        flat = Image.new("RGBA", im.size, (255, 255, 255, 255))
        flat.alpha_composite(im)
        im = flat
    return im.convert("RGB")


def resized(im, width):
    height = round(im.height * width / im.width)
    return im.resize((width, height), Image.LANCZOS)


if cover_mode:
    covers = [p for p in source.glob("*.png") if "front" in p.name.lower()]
    if not covers:
        sys.exit(f"No cover found in {source} (looked for a .png with 'front' in its name).")
    out = site / "img" / "covers"
    out.mkdir(parents=True, exist_ok=True)
    im = load_rgb(covers[0])
    front = im.crop((im.width // 2, 0, im.width, im.height))
    front.save(out / f"{book_id}.webp", "WEBP", quality=82, method=6)
    resized(front, 420).save(out / f"{book_id}-420.webp", "WEBP", quality=80, method=6)
    print(f"Cover saved to {out} (from {covers[0].name})")
    sys.exit(0)

pages = sorted((p for p in source.glob("*.png") if page_number(p) is not None), key=page_number)
if not pages:
    sys.exit(f"No numbered pages (Page_1.png or 1.png ...) found in {source}")

out = site / "img" / book_id / "print"
out.mkdir(parents=True, exist_ok=True)
for p in pages:
    im = load_rgb(p)
    n = page_number(p)
    for width, quality in ((2400, 82), (1600, 82), (960, 80)):
        resized(im, width).save(out / f"p{n}-{width}.webp", "WEBP", quality=quality, method=6)
    print(f"page {n}: done")

print(f"\n{len(pages)} pages saved to {out}")
print(f'In books.js, each page needs  printed: "img/{book_id}/print/pN"  (N = page number).')
