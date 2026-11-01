from pathlib import Path
from xml.etree import ElementTree as ET
import json,re,subprocess,sys
import tinycss2
root=Path(__file__).resolve().parent
errs=[]
for fn in ['angular.json','package.json','vercel.json']:
 try:json.loads((root/fn).read_text())
 except Exception as e: errs.append(f'Invalid JSON: {fn} {e}')
for svg in (root/'public').rglob('*.svg'):
 try:ET.parse(svg)
 except Exception as e:errs.append(f'Invalid SVG {svg}: {e}')
css=(root/'src/styles.css').read_text()
errs += [f'CSS {e.message}' for e in tinycss2.parse_stylesheet(css,skip_whitespace=True,skip_comments=True) if e.type=='error']
for name in ['kinetic-orbit.svg','noise.svg']:
 if not (root/'public/visuals'/name).exists():errs.append('Missing asset '+name)
for page in ['home','company','services','ventures','leadership','contact','privacy','terms','not-found']:
 f=root/'src/app/pages'/f'{page}.page.ts'
 if not f.exists():errs.append('Missing page '+page)
for name in ['#000000','#ffffff','#2c3480']:
 if name not in css:errs.append('Missing colour '+name)
for f in (root/'src/app').rglob('*.ts'):
 s=f.read_text()
 for result in re.finditer(r"from\s+['\"](\.[^'\"]+)['\"]",s):
  target=(f.parent/result.group(1))
  if not (Path(str(target)+'.ts').exists() or target.exists()):errs.append(f'Missing import {f.name}: {result.group(1)}')
print(f'Checked {len(list((root/"src/app").rglob("*.ts")))} Angular source files, SVG assets, data, configuration and CSS')
print('ISSUES:', len(errs))
for e in errs: print(' -',e)
sys.exit(bool(errs))
