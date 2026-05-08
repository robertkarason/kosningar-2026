#!/usr/bin/env python3
"""
Build static HTML pages for each manifesto/stefnuskrá.

Reads .md files from manifesto/, converts to HTML, and writes
self-contained .html files to stefnuskra/.

Usage:
    python build_stefnuskra.py
"""

import re
import sys
from pathlib import Path

import markdown

ROOT = Path(__file__).parent
MANIFESTO_DIR = ROOT / "manifesto"
OUTPUT_DIR = ROOT / "stefnuskra"
OUTPUT_DIR.mkdir(exist_ok=True)

# Party metadata. The first manifestoFile entry is treated as the default landing
# page for that party. Slug=None means "use party id only" (single-doc parties).
PARTIES = [
    {
        "id": "sjalfstaedisflokkurinn",
        "name": "Sjálfstæðisflokkurinn",
        "shortName": "Sjálfstæðisfl.",
        "listLetter": "D",
        "color": "#1F4E8C",
        "url": "https://www.islendingur.is/",
        "manifestoFiles": [
            ("rekstur",        "Rekstur og stjórnsýsla",         "Sjálfstæðisflokkurinn - Rekstur og stjórnsýsla.md"),
            ("atvinna",        "Atvinnumál",                     "Sjálfstæðisflokkurinn - Atvinnumál.md"),
            ("menntamal",      "Menntamál",                      "Sjálfstæðisflokkurinn - Menntamál.md"),
            ("velferd",        "Velferðarmál",                   "Sjálfstæðisflokkurinn - Velferðarmál.md"),
            ("skipulag",       "Skipulagsmál",                   "Sjálfstæðisflokkurinn - Skipulagsmál.md"),
            ("ithrott",        "Íþrótta- og tómstundamál",       "Sjálfstæðisflokkurinn - Íþrótta- og tómstundamál.md"),
            ("menning",        "Menningarmál",                   "Sjálfstæðisflokkurinn - Menningarmál.md"),
            ("borgarhlutverk", "Borgarhlutverk Akureyrarbæjar",  "Sjálfstæðisflokkurinn - Borgarhlutverk Akureyrarbæjar.md"),
        ],
    },
    {
        "id": "akureyrarlistinn",
        "name": "Akureyrarlistinn",
        "shortName": "Akureyrarl.",
        "listLetter": "Y",
        "color": "#2D9C5C",
        "url": "https://akureyrarlistinn.is/stefna/",
        "manifestoFiles": [
            (None, "8 lykilmál", "Akureyrarlistinn - lykilmál.md"),
        ],
    },
    {
        "id": "l-listinn",
        "name": "L-listinn",
        "shortName": "L-listinn",
        "listLetter": "L",
        "color": "#8B6F47",
        "url": "https://www.l-listinn.is/is/stefnumal",
        "manifestoFiles": [
            (None, "Stefnumál", "L-listinn - Stefnumál.md"),
        ],
    },
    {
        "id": "samfylkingin",
        "name": "Samfylkingin",
        "shortName": "Samfylkingin",
        "listLetter": "S",
        "color": "#E63946",
        "url": "https://xs.is/sterkari-saman",
        "manifestoFiles": [
            (None, "Sterkari saman", "Samfylkingin - Sterkari saman.md"),
        ],
    },
    {
        "id": "vidreisn",
        "name": "Viðreisn",
        "shortName": "Viðreisn",
        "listLetter": "C",
        "color": "#FF8C00",
        "url": "https://vidreisn.is/akureyri/stefnan/",
        "manifestoFiles": [
            (None, "Stefnan á Akureyri", "Viðreisn - Stefnan á Akureyri.md"),
        ],
    },
]


def slug_for(party_id: str, file_slug):
    """Build the output slug for a (party, doc) combination."""
    if file_slug is None:
        return party_id
    return f"{party_id}-{file_slug}"


def first_doc_slug(party):
    """Return the slug of the party's primary doc (first in manifestoFiles)."""
    return slug_for(party["id"], party["manifestoFiles"][0][0])


def strip_frontmatter(md: str) -> str:
    if md.startswith("---"):
        end = md.find("\n---", 3)
        if end != -1:
            return md[end + 4 :].lstrip()
    return md


def strip_standalone_images(md: str) -> str:
    """Drop standalone image lines (e.g. header images) so they don't take up space."""
    lines = md.split("\n")
    filtered = [l for l in lines if not re.match(r"^\s*!\[[^\]]*\]\([^)]*\)\s*$", l)]
    return re.sub(r"\n{3,}", "\n\n", "\n".join(filtered))


def render_markdown(md: str) -> str:
    return markdown.markdown(md, extensions=["extra", "sane_lists"])


def build_sidebar(active_party, active_slug: str) -> str:
    parts = [f'<aside class="viewer-sidebar" style="--party-color: {active_party["color"]};">']
    parts.append("<h4>Allir flokkar</h4>")
    parts.append("<ul>")
    for p in PARTIES:
        target = first_doc_slug(p)
        is_active = p["id"] == active_party["id"]
        cls = ' class="active"' if is_active else ""
        style = f' style="--party-color: {p["color"]};"' if is_active else ""
        parts.append(f'<li><a href="{target}.html"{cls}{style}>{p["name"]}</a></li>')
    parts.append("</ul>")

    if len(active_party["manifestoFiles"]) > 1:
        parts.append("<h4>Skjöl</h4>")
        parts.append("<ul>")
        for slug, title, _ in active_party["manifestoFiles"]:
            target = slug_for(active_party["id"], slug)
            is_active = target == active_slug
            cls = ' class="active"' if is_active else ""
            style = f' style="--party-color: {active_party["color"]};"' if is_active else ""
            parts.append(f'<li><a href="{target}.html"{cls}{style}>{title}</a></li>')
        parts.append("</ul>")

    parts.append("</aside>")
    return "\n          ".join(parts)


def build_page(party, doc_slug, doc_title: str, content_html: str) -> str:
    active_slug = slug_for(party["id"], doc_slug)
    sidebar = build_sidebar(party, active_slug)
    title = f'{doc_title} — {party["name"]} · Kosningar Akureyri 2026'
    return f"""<!DOCTYPE html>
<html lang="is">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <meta name="description" content="Stefnuskrá {party["name"]} — Kosningar Akureyri 2026.">
  <link rel="stylesheet" href="../assets/styles.css">
</head>
<body>
  <header class="site-header">
    <nav class="site-nav">
      <a href="../index.html" class="site-logo">
        <span class="logo-mark">A</span>
        Kosningar Akureyri 2026
      </a>
      <div class="nav-links">
        <a href="../index.html">Yfirlit</a>
        <a href="../akvardanavel.html">Ákvörðunarvél</a>
        <a href="../samanburdur.html">Samanburður</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="section">
      <div class="container">
        <div class="viewer-layout">
          {sidebar}
          <article class="viewer-content" style="--party-color: {party["color"]};">
            <div class="viewer-header">
              <a href="../index.html" class="back-link">← Til baka á yfirlit</a>
              <div>
                <span class="party-pill" style="--party-color: {party["color"]}; background: {party["color"]};">
                  <strong>{party["listLetter"]}</strong> {party["name"]}
                </span>
              </div>
              <p class="text-muted" style="margin: 0.25rem 0 0; font-size: 0.92rem;">
                {doc_title}
                · <a href="{party["url"]}" target="_blank" rel="noopener">Uppruni ↗</a>
                · <a href="../akvardanavel.html">Ákvörðunarvél</a>
                · <a href="../samanburdur.html">Samanburður</a>
              </p>
            </div>
            {content_html}
          </article>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <span>Kosningar Akureyri · 16. maí 2026</span>
        <span class="text-muted">Útbúið til einkanota</span>
      </div>
    </div>
  </footer>
</body>
</html>
"""


def main():
    count = 0
    for party in PARTIES:
        for slug, title, filename in party["manifestoFiles"]:
            md_path = MANIFESTO_DIR / filename
            if not md_path.exists():
                print(f"  WARNING: {md_path} not found, skipping")
                continue
            md = md_path.read_text(encoding="utf-8")
            md = strip_frontmatter(md)
            md = strip_standalone_images(md)
            html = render_markdown(md)
            page = build_page(party, slug, title, html)
            output_slug = slug_for(party["id"], slug)
            out_path = OUTPUT_DIR / f"{output_slug}.html"
            out_path.write_text(page, encoding="utf-8")
            print(f"  {md_path.name}\n    -> {out_path.relative_to(ROOT)}")
            count += 1
    print(f"\nWrote {count} stefnuskrá page{'s' if count != 1 else ''}.")


if __name__ == "__main__":
    main()
