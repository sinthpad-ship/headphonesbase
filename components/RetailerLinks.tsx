import {activeOffers} from '../lib/commerce';
export default function RetailerLinks({slug}:{slug:string}) {
 const offers=activeOffers(slug);
 if(!offers.length)return null;
 return <div className="retailer-links">{offers.map(o=><div key={o.id}><a className="button primary" href={o.url} target="_blank" rel={o.affiliate?'sponsored nofollow noopener noreferrer':'noopener noreferrer'}>View at {o.merchant} · {o.region} {o.affiliate?' (paid link)':''} ↗</a>{o.variant&&<span className="small retailer-variant">{o.variant}</span>}</div>)}<p className="small">{offers.some(o=>o.merchant==='Amazon.com'&&o.affiliate)?'As an Amazon Associate I earn from qualifying purchases. ':''}{offers.some(o=>o.affiliate&&o.merchant!=='Amazon.com')?'We may earn a commission from marked paid links. ':''}Check the retailer for price, availability and delivery to your country.</p></div>;
}
