import Link from 'next/link';
import {technologies,modelsFor} from '../../lib/knowledge';
import {pageMeta} from '../../lib/seo';
export const metadata=pageMeta('Headphone technology','Understand headphone drivers, enclosure designs, noise cancellation and wireless audio with primary sources.','/technology/');
export default function Page(){return <main id="main" className="page"><p className="eyebrow">Understand the engineering</p><h1>Headphone technology</h1><p className="lead">Learn what a feature means, what it cannot tell you, and which catalogue models have evidence for it.</p><div className="category-grid">{technologies.map(t=><Link key={t.id} className="panel" href={'/technology/'+t.slug+'/'}><h2>{t.title}</h2><p>{t.summary}</p><span className="small">{modelsFor(t.slug).length} linked models · Read the evidence →</span></Link>)}</div></main>}
