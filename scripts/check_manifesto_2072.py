"""Check the new edition without changing or revalidating archived manifestos."""
from pathlib import Path
import json
from pypdf import PdfReader
from manifesto_2072_content import PAGES

ROOT = Path(__file__).resolve().parents[1]
AUDIT = ROOT / 'tmp/pdfs/manifesto-2072'
PDF = ROOT / 'output/pdf/Caprica_Your_Freedom_Your_Future_2072_Manifesto.pdf'
reader = PdfReader(PDF)
text = '\n'.join(p.extract_text() for p in reader.pages)
assert len(reader.pages) == 32
assert len(PAGES) == 22 and all(len(p['entries']) == 6 for p in PAGES)
for old in ['68%', '65%', 'another term', '2069', '2070', '2071', 'CURRENT RESULT', 'CAPROC', 'Rochelism', '\u2014', '\u2013', '\u2011']:
    assert old not in text, old
for required in ['FOUR YEARS IN OPPOSITION', '2076', 'secret ballot', 'pooled parental',
                 'CU Reform Compact', 'seventy-year secrecy', 'human review',
                 'independently examined opening balance sheet', 'VOTE LIBERTY.']:
    assert required in text, required

layout = json.loads((AUDIT/'layout.json').read_text())
for i,a in enumerate(layout):
    assert a['x'] >= 0 and a['x']+a['w'] <= 595.38
    assert a['y'] >= 0 and a['y']+a['h'] < 841.89
    for b in layout[i+1:]:
        if a['page'] != b['page']:
            continue
        ix = min(a['x']+a['w'],b['x']+b['w'])-max(a['x'],b['x'])
        iy = min(a['y']+a['h'],b['y']+b['h'])-max(a['y'],b['y'])
        assert not (ix>.5 and iy>.5), f"Page {a['page']}: {a['text'][:45]} / {b['text'][:45]}"

photos = json.loads((AUDIT/'photo-usage.json').read_text())
assert len(photos)==len({p['sha256'] for p in photos})
assert all(p['effective_dpi']>=180 for p in photos)
sources=json.loads((ROOT/'assets/manifesto-2068/sources.json').read_text())
assert all(p['file'] in {s['file'] for s in sources['images']} for p in photos)
page_map=json.loads((AUDIT/'page-map.json').read_text())
assert len(page_map)==32
for key,num in {'rights':7,'intelligence':8,'work':13,'housing':16,'foreign':21,
                'fiscal-rules':29,'funding':30,'delivery':31,'closing':32}.items():
    assert page_map[key]==num, key
links=[a.get_object() for p in reader.pages for a in p.get('/Annots',[])]
assert len(links)==30
for link in links:
    if '/Dest' in link:
        assert any(link['/Dest'][0]==p.indirect_reference for p in reader.pages)
    else:
        assert link['/A']['/URI']=='https://manualalan.github.io/mr2072/'
print(f'PASS: 32 pages, 22 chapters, {len(layout)} nonoverlapping text blocks, '
      f'{len(photos)} unique sourced photos and {len(links)} valid links. Visual review still required.')
