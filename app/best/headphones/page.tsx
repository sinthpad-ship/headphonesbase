import Link from 'next/link';
import {useCases} from '../../../lib/categories';
import {pageMeta} from '../../../lib/seo';
export const metadata=pageMeta('Best headphones by use case','Practical headphone shortlists with selection criteria, technical evidence and clear limitations.','/best/headphones/');
export default function Page(){return <main id="main" className="container"><section className="section"><p className="eyebrow">Start with your listening</p><h1>Best for your use case</h1><p className="lead">A useful shortlist starts with a job. These editorial selections use documented features from our catalogue; they are not lab rankings or universal winners.</p><div className="category-grid">{useCases.map(c=><Link className="panel" href={`/best/${c.slug}/`} key={c.slug}><h2>{c.name}</h2><p>{c.intro}</p><span>Selection criteria & shortlist →</span></Link>)}</div><Link href="/methodology/">How we choose and verify</Link></section></main>}
