import {activeOffers} from '../lib/commerce';
export default function RetailerLinks({slug}:{slug:string}) {
 const offers=activeOffers(slug);
 if(!offers.length)return null;
 return <div className="retailer-links">{offers.map(o=><div key={o.id}><a className="button primary" href={o.url} target="_blank" rel="sponsored nofollow noopener noreferrer">View at {o.merchant} · {o.region} (paid link) ↗</a>{o.variant&&<span className="small retailer-variant">{o.variant}</span>}</div>)}<p className="small">As an Amazon Associate I earn from qualifying purchases. Price and availability on Amazon.</p></div>;
}
