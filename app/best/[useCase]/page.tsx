import Link from 'next/link';
import {notFound} from 'next/navigation';
import {useCases,inCategory} from '../../../lib/categories';
import {headphones} from '../../../lib/headphones';
import {pageMeta,breadcrumbs} from '../../../lib/seo';
import ProductCard from '../../../components/ProductCard';
import JsonLd from '../../../components/JsonLd';
export const dynamicParams=false;
export function generateStaticParams(){return useCases.map(c=>({useCase:c.slug}))}
export async function generateMetadata({params}:{params:Promise<{useCase:string}>}){const {useCase}=await params;const c=useCases.find(x=>x.slug===useCase);return c?pageMeta(`Best headphones for ${c.name.toLowerCase()}`,c.intro,`/best/${useCase}/`):{}}
export default async function Page({params}:{params:Promise<{useCase:string}>}){const {useCase}=await params;const c=useCases.find(x=>x.slug===useCase);if(!c)notFound();return <main id="main" className="container"><JsonLd data={breadcrumbs([{name:'Best by use case',path:'/best/headphones/'},{name:c.name,path:`/best/${c.slug}/`}])}/><section className="section"><p className="eyebrow">Editorial shortlist • manufacturer evidence</p><h1>Headphones for {c.name.toLowerCase()}</h1><p className="lead">{c.intro}</p><div className="panel"><h2>How to choose</h2><p>{c.criteria}</p><p>{c.caution}</p></div><h2>Three starting points</h2><p>Selected from {headphones.filter(h=>inCategory(h,c.slug)).length} catalogue models for this use. The order is not a quality ranking. Compare the documented features, then check fit and compatibility.</p><div className="product-grid">{c.picks.map(slug=><ProductCard key={slug} h={headphones.find(h=>h.slug===slug)!}/>)}</div><div className="actions"><Link className="button" href={`/compare/?models=${c.picks.join(',')}`}>Compare this shortlist</Link><Link href={`/categories/${c.slug}/`}>See every {c.name.toLowerCase()} option →</Link></div><Link href="/methodology/">Read our methodology</Link></section></main>}
