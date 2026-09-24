import json,re
from pathlib import Path
from urllib.parse import urlsplit,unquote
from html.parser import HTMLParser
root=Path('out');data=json.load(open('data/headphones.json'))
assert len(data)>=50 and len({h['slug'] for h in data})==len(data)
for h in data:
 for field in ['brand','model','design','form','connection','anc','uses','specs','sourceUrl','checkedAt']:assert h.get(field),(h['slug'],field)
 assert h['sourceUrl'].startswith('https://')
 assert root.joinpath('headphones',h['slug'],'index.html').exists()
class Page(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.h1=0;self.canonical=[];self.description=[];self.ids=[]
 def handle_starttag(self,t,a):
  d=dict(a)
  if t=='a' and d.get('href'):self.links.append(d['href'])
  if t=='h1':self.h1+=1
  if d.get('id'):self.ids.append(d['id'])
  if t=='link' and d.get('rel')=='canonical':self.canonical.append(d.get('href'))
  if t=='meta' and d.get('name')=='description':self.description.append(d.get('content'))
count=0
for f in root.rglob('index.html'):
 if '_not-found' in str(f) or '/404/' in str(f):continue
 s=f.read_text();p=Page();p.feed(s);assert p.h1==1,(f,'h1',p.h1);assert len(p.canonical)==1,(f,'canonical');assert len(p.description)==1,(f,'description');assert 'main' in p.ids,(f,'skip target')
 for link in p.links:
  u=urlsplit(link)
  if u.scheme or u.netloc:continue
  path=unquote(u.path)
  if not path:continue
  dest=root/path.lstrip('/')
  assert dest.is_file() or (dest/'index.html').is_file(),(f,link)
 for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>',s):json.loads(block)
 count+=1
assert len(re.findall('<loc>',(root/'sitemap.xml').read_text()))==80
print(f'Validated {len(data)} models, {count} HTML routes, internal links, metadata, skip targets and JSON-LD.')
