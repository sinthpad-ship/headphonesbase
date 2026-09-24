'use client';
import {useState} from 'react';
import type {Headphone} from '../lib/headphones';
export default function ProductImage({h,priority=false}:{h:Headphone;priority?:boolean}){const [failed,setFailed]=useState(false);return <div className="product-image">{h.image&&!failed?<img src={h.image.url} alt={h.brand+' '+h.model+' — manufacturer product photograph'} width={600} height={480} loading={priority?'eager':'lazy'} decoding="async" onError={()=>setFailed(true)}/>:<a href={h.sourceUrl} target="_blank" rel="noopener noreferrer">View product photos at {h.brand} ↗</a>}</div>;}
