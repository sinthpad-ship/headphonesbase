import Link from 'next/link';
import {notFound} from 'next/navigation';
import {technologies,modelsFor,history} from '../../../lib/knowledge';
import {pageMeta,breadcrumbs,origin} from '../../../lib/seo';
import Sources from '../../../components/Sources';
import ProductCard from '../../../components/ProductCard';
import JsonLd from '../../../components/JsonLd';
export const dynamicParams=false;
export function generateStaticParams(){return technologies.map(t=>({slug:t.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const t=technologies.find(x=>x.slug===slug);return t?pageMeta(t.title,t.summary,'/technology/'+slug+'/'):{}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const t=technologies.find(x=>x.slug===slug);if(!t)notFound();const models=modelsFor(slug);return <main id="main" className="page"><JsonLd data={breadcrumbs([{name:'Technology',path:'/technology/'},{name:t.title,path:'/technology/'+slug+'/'}])}/><JsonLd data={{'@context':'https://schema.org','@type':'DefinedTerm','@id':origin+'/technology/'+slug+'/',name:t.title,description:t.summary,inDefinedTermSet:origin+'/technology/'}}/><Link href="/technology/">← All technology</Link><article className="prose"><h1>{t.title}</h1><p className="lead">{t.summary}</p><h2>How it works</h2><p>{t.explanation}</p><h2>What to check when choosing</h2><p>{t.decision}</p><div className="notice"><h2>Limits of the claim</h2><p>{t.limitations}</p></div></article><Sources items={t.sources}/><div className="actions">{history.filter(e=>e.technologyIds.includes(t.id)).map(e=><Link key={e.id} href={'/history/'+e.slug+'/'}>{e.date}: {e.title} →</Link>)}</div><section><h2>Models with documented support</h2><p className="small">Links use recorded specifications. Missing evidence is not treated as a negative finding.</p>{models.length?<div className="product-grid">{models.map(h=><ProductCard key={h.slug} h={h}/>)}</div>:<p>No models are linked yet: the required field has not been verified in this catalogue.</p>}</section></main>}
