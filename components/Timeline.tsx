'use client';
import {useState} from 'react';
import Link from 'next/link';
import history from '../data/history.json';
export default function Timeline(){
 const [era,setEra]=useState(''),[query,setQuery]=useState('');
 const items=history.filter(e=>(!era||e.era===era)&&[e.title,e.device,...e.people,...e.organizations,e.date].join(' ').toLowerCase().includes(query.trim().toLowerCase()));
 return <><div className="filters"><label>Search history<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Person, device or year"/></label><label>Era<select value={era} onChange={e=>setEra(e.target.value)}><option value="">All eras</option>{[...new Set(history.map(e=>e.era))].map(x=><option key={x}>{x}</option>)}</select></label><button onClick={()=>{setEra('');setQuery('')}}>Reset timeline</button></div><p role="status">{items.length} documented milestones</p><ol className="timeline">{items.map(e=><li key={e.id}><span className="timeline-date">{e.date}</span><article className="panel"><p className="eyebrow">{e.era} · {e.sources[0].type}</p><h2><Link href={'/history/'+e.slug+'/'}>{e.title}</Link></h2><p>{e.summary}</p><p className="small">{e.uncertainty}</p><Link href={'/history/'+e.slug+'/'}>Read the evidence →</Link></article></li>)}</ol>{!items.length&&<p>No milestones match. Try another year or reset the timeline.</p>}</>;
}
