import Catalog from '../../components/Catalog';
import {headphones} from '../../lib/headphones';
import {pageMeta} from '../../lib/seo';
export const metadata=pageMeta('Headphone catalogue','Search and filter 50 manufacturer-sourced headphone profiles by brand, use case, connection, design and active noise cancellation.','/headphones/');
export default function Page(){return <main id="main" className="page"><p className="eyebrow">EXPLORE THE CATALOGUE</p><h1>Headphones, with context.</h1><p className="lead">Filter the facts. Read the trade-offs. Compare your shortlist.</p><section id="catalog"><Catalog items={headphones}/></section></main>;}
