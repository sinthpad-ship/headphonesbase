import Link from 'next/link';
import {notFound} from 'next/navigation';
import {categories,inCategory,useCases} from '../../../lib/categories';
import {headphones} from '../../../lib/headphones';
import {pageMeta,breadcrumbs} from '../../../lib/seo';
import Catalog from '../../../components/Catalog';
import JsonLd from '../../../components/JsonLd';
export const dynamicParams=false;
export function generateStaticParams(){return categories.map(c=>({slug:c.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const c=categories.find(x=>x.slug===slug);return c?pageMeta(`${c.name} headphones`,c.intro,`/categories/${slug}/`):{}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const c=categories.find(x=>x.slug===slug);if(!c)notFound();return <main id="main" className="container"><JsonLd data={breadcrumbs([{name:'Categories',path:'/categories/'},{name:c.name,path:`/categories/${slug}/`}])}/><section className="section"><p className="eyebrow">Browse by purpose & design</p><h1>{c.name} headphones</h1><p className="lead">{c.intro}</p>{useCases.some(x=>x.slug===slug)&&<Link className="button" href={`/best/${slug}/`}>Read the {c.name.toLowerCase()} selection guide →</Link>}</section><Catalog items={headphones.filter(h=>inCategory(h,slug))}/></main>}
