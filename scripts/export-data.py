"""Deterministic public read-only snapshot; no API runtime or private commerce data."""
import json,re
from pathlib import Path
root=Path(__file__).resolve().parents[1]
load=lambda p:json.loads((root/p).read_text())
def save(path,obj):
 p=root/'public/data/v1'/path;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(obj,ensure_ascii=False,indent=2)+'\n')
h=load('data/headphones.json');history=load('data/history.json');tech=load('data/technology.json')
fields=['manufacturer','brand','model','variant','generation','releaseDate','status','form','design','connection','wireless','anc','driverTechnology','driver','impedance','sensitivity','frequency','weight','bluetoothVersion','codecs','microphone','battery','charging','connectors','cable']
records=[];edges=[];entities=[]
for t in tech:entities.append({'id':t['id'],'type':'technology','label':t['title'],'url':'/technology/'+t['slug']+'/'})
for e in history:
 entities.append({'id':e['id'],'type':'historical-event','label':e['title'],'url':'/history/'+e['slug']+'/'})
 for tid in e['technologyIds']:edges.append({'subject':e['id'],'predicate':'documents_milestone_for','object':tid,'sources':e['sources'],'basis':'documented-history'})
for item in h:
 model_id='model:'+item['slug'];brand_id='brand:'+re.sub(r'[^a-z0-9]+','-',item['brand'].lower()).strip('-')
 entities.append({'id':model_id,'type':'model','label':item['brand']+' '+item['model'],'url':'/headphones/'+item['slug']+'/'})
 if not any(e['id']==brand_id for e in entities):entities.append({'id':brand_id,'type':'brand','label':item['brand']})
 base={'url':item['sourceUrl'],'type':'manufacturer','verifiedAt':item['checkedAt'],'scope':'profile-level source; not a new field-level recheck'}
 fs={}
 for key in fields:
  value=item.get(key,item['specs'].get(key))
  if key=='anc' and value=='yes':value=True
  elif key=='anc' and value=='no':value=False
  state='documented' if value is not None else 'unknown'
  if value=='not-verified':state='unknown';value=None
  if value=='not-applicable':state='not-applicable';value=None
  if any(c['field']==key for c in item.get('conflicts',[])):state='conflicting';value=None
  fs[key]={'status':state,'value':value,'sources':[item.get('fieldSources',{}).get(key,base)] if state!='unknown' else []}
 # Normalize a single explicit impedance, never flatten variant lists.
 raw=item['specs'].get('impedance','');m=re.fullmatch(r'(\d+(?:\.\d+)?)\s*Ω',raw)
 fs['impedanceOhms']={'status':'documented' if m else 'unknown','value':float(m[1]) if m else None,'unit':'ohm','sources':[base] if m else []}
 photo=item.get('image',{})
 licensed=photo.get('rightsStatus')=='cleared' and all(photo.get(k) for k in ('license','licenseUrl','attribution'))
 image={'status':'licensed' if licensed else 'unverified-rights','sourceUrl':photo.get('sourceUrl',item['sourceUrl'])}
 if licensed:image.update({'url':photo['url'],'license':photo['license'],'licenseUrl':photo['licenseUrl'],'attribution':photo['attribution'],'verifiedAt':photo['checkedAt']})
 record={'id':model_id,'slug':item['slug'],'fields':fs,'officialProductUrl':item['sourceUrl'],'sourceReviewedAt':item['checkedAt'],'useCases':{'basis':'editorial','values':item['uses']},'conflicts':item.get('conflicts',[]),'image':image,'predecessor':{'status':'unknown','id':None},'successor':{'status':'unknown','id':None}}
 records.append(record);save('models/'+item['slug']+'.json',record)
 edges.append({'subject':model_id,'predicate':'branded_by','object':brand_id,'sources':[base],'basis':'documented-specification'})
 for t in tech:
  match=t['match'];yes=False
  if 'design' in match:yes=item['design']==match['design']
  if 'anc' in match:yes=item['anc']==match['anc']
  if 'driverTechnology' in match:yes=item['specs'].get('driverTechnology')==match['driverTechnology']
  if yes:edges.append({'subject':model_id,'predicate':'has_technology','object':t['id'],'sources':[item.get('fieldSources',{}).get('driverTechnology',base)],'basis':'documented-specification'})
 for use in item['uses']:
  uid='use:'+use
  if not any(e['id']==uid for e in entities):entities.append({'id':uid,'type':'use-case','label':use,'url':'/categories/'+use+'/'})
  edges.append({'subject':model_id,'predicate':'editorially_suited_to','object':uid,'sources':[{'url':'https://headphonesbase.com/methodology/','type':'editorial-methodology'}],'basis':'editorial'})
save('headphones.json',{'schemaVersion':'1.0.0','records':records})
save('history.json',{'schemaVersion':'1.0.0','records':history})
save('technology.json',{'schemaVersion':'1.0.0','records':tech})
save('graph.json',{'schemaVersion':'1.0.0','entities':entities,'relationships':edges})
save('manifest.json',{'schemaVersion':'1.0.0','delivery':'static-snapshot','counts':{'models':len(records),'history':len(history),'technology':len(tech),'relationships':len(edges)},'datasets':['headphones.json','history.json','technology.json','graph.json'],'schema':'model.schema.json','notes':['No query server, MCP service or machine payments are running.','Record review dates are preserved; build time does not mean re-verification.','No merchant prices, availability, private account or tax data are included.','Source images and third-party content are not licensed for redistribution by this snapshot.']})
save('model.schema.json',{'$schema':'https://json-schema.org/draft/2020-12/schema','$id':'https://headphonesbase.com/data/v1/model.schema.json','title':'HeadphonesBase model record v1','type':'object','required':['id','slug','fields','officialProductUrl','sourceReviewedAt','useCases','conflicts','image','predecessor','successor'],'properties':{'id':{'type':'string','pattern':'^model:'},'slug':{'type':'string'},'officialProductUrl':{'type':'string','format':'uri'},'sourceReviewedAt':{'type':'string','format':'date'},'fields':{'type':'object','required':fields+['impedanceOhms'],'additionalProperties':{'$ref':'#/$defs/field'}}},'$defs':{'field':{'type':'object','required':['status','value','sources'],'properties':{'status':{'enum':['documented','unknown','not-published','not-applicable','conflicting']},'value':{'type':['string','number','boolean','null']},'sources':{'type':'array','items':{'type':'object','required':['url'],'properties':{'url':{'type':'string','format':'uri'}}}},'unit':{'type':'string'}},'allOf':[{'if':{'properties':{'status':{'enum':['unknown','not-published','not-applicable','conflicting']}}},'then':{'properties':{'value':{'type':'null'}}}}]}}})
print(f'Exported {len(records)} models, {len(history)} milestones, {len(tech)} terms, {len(edges)} relationships.')
