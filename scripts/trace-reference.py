"""Trace seat centres from the published 2017 image; not ticket numbering.
The threshold separates grey seat blocks from the light paper background.
Only gaps of one pixel are closed, to avoid splitting a block on JPEG noise.
Seat counts follow the observed 6.3-pixel pitch, never a capacity adjustment.
"""
from PIL import Image,ImageDraw
from pathlib import Path
import json
root=Path(__file__).resolve().parents[1]
im=Image.open(root/'public/reference/seating-all.jpg').convert('L')
pix=im.load();out={}
levels={'1F':[16.5+i*7.5 for i in range(8)]+[91.5+i*7.5 for i in range(16)],'2F':[228+i*7.5 for i in range(11)],'3F':[326.5+i*7.5 for i in range(10)]}
for level,ys in levels.items():
 rows=[]
 for row,y in enumerate(ys):
  vals=[sum(pix[x,yy] for yy in range(round(y)-1,round(y)+2))/3 for x in range(im.width)]
  mask=[v<205 for v in vals]
  for x in range(62,558):
   if mask[x-1] and not mask[x] and mask[x+1]:mask[x]=True
  runs=[];start=None
  for x in range(60,561):
   if x<560 and mask[x] and start is None:start=x
   if (x==560 or not mask[x]) and start is not None:
    if x-start>=5:runs.append({'left':start,'right':x,'count':round((x-start)/6.3)})
    start=None
  rows.append({'imageY':y,'segments':runs})
 out[level]=rows
text='// Generated from the published seating image by scripts/trace-reference.py.\nexport const TRACED_ROWS='+json.dumps(out,ensure_ascii=False,separators=(',',':'))+';\n'
(root/'src/traced-seating.js').write_text(text)
counts={level:sum(seg['count'] for row in rows for seg in row['segments']) for level,rows in out.items()}
print(json.dumps(counts))
assert counts=={'1F':1066,'2F':318,'3F':297},counts
# A tracing overlay for visual inspection, kept among intermediate evidence.
view=im.convert('RGB').resize((2560,1612),Image.Resampling.NEAREST);d=ImageDraw.Draw(view)
for level,rows in out.items():
 for row in rows:
  for seg in row['segments']:
   for j in range(seg['count']):
    x=seg['left']+(j+.5)*(seg['right']-seg['left'])/seg['count'];y=row['imageY'];d.ellipse((x*4-3,y*4-3,x*4+3,y*4+3),fill={'1F':'#f14c30','2F':'#1e98f8','3F':'#319c43'}[level])
view.save(root.parents[1]/'work/meixihu-traced-seats.png')
