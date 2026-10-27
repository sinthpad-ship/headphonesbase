'use client';
import {useState} from 'react';
import {imageCleared,type Headphone} from '../lib/headphones';
export default function ProductImage({h,priority=false}:{h:Headphone;priority?:boolean}) {
 const [failedUrl,setFailedUrl]=useState<string|null>(null);
 const licensed=imageCleared(h)&&Boolean(h.image)&&h.image?.url!==failedUrl;
 return <>
  <div className="product-image">{licensed&&h.image
   ?<img src={h.image.url} alt={`${h.brand} ${h.model} — product photograph`} width={600} height={480} loading={priority?'eager':'lazy'} decoding="async" onError={()=>setFailedUrl(h.image?.url??null)}/>
   :<a href={h.sourceUrl} target="_blank" rel="noopener noreferrer">View product photos at {h.brand} ↗</a>}</div>
  {licensed&&h.image&&<span className="small">{h.image.attribution} <a className="image-license" href={h.image.licenseUrl} target="_blank" rel="noopener noreferrer">Photo license: {h.image.license} ↗</a></span>}
 </>;
}
