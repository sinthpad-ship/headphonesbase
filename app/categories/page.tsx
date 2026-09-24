import Link from 'next/link';
import {categories,inCategory} from '../../lib/categories';
import {headphones} from '../../lib/headphones';
import {pageMeta} from '../../lib/seo';
export const metadata=pageMeta('Headphone categories','Browse headphones by design, connection and intended use.','/categories/');
export default function Page(){return <main id="main" className="container"><section className="section"><p className="eyebrow">Find your starting point</p><h1>Headphone categories</h1><div className="category-grid">{categories.map(c=><Link className="panel" key={c.slug} href={`/categories/${c.slug}/`}><h2>{c.name}</h2><p>{c.intro}</p><span>{headphones.filter(h=>inCategory(h,c.slug)).length} models →</span></Link>)}</div></section></main>}
