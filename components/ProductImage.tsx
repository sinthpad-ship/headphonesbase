'use client';
import {useState} from 'react';
import {imageCleared,type Headphone} from '../lib/headphones';
export default function ProductImage({h,priority=false}:{h:Headphone;priority?:boolean}) {
 const [failed,setFailed]=useState(false);
 const licensed=imageCleared(h)&&Boolean(h.image)&&!failed;
 return <>
  <div className="product-image">{licensed&&h.image
   ?<img src={h.image.url} alt={`${h.brand} ${h.model} — independently licensed photograph`} width={600} height={480} loading={priority?'eager':'lazy'} decoding="async" onError={()=>setFailed(true)}/>
   :<a href={h.sourceUrl} target="_blank" rel="noopener noreferrer">View product photos at {h.brand} ↗</a>}</div>
  {licensed&&h.image&&<a className="image-license" href={h.image.licenseUrl} target="_blank" rel="noopener noreferrer">Photo license: {h.image.license} ↗</a>}
 </>;
}
