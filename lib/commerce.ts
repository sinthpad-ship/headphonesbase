import records from '../data/offers.json';
// Deliberately independent of the technical/editorial catalogue. Never infer offers from sources.
export type Offer = {id:string;productSlug:string;merchant:string;url:string;affiliate:boolean;approved:boolean;region:string;verifiedAt:string;expiresAt:string;price?:{amount:number;currency:string};availability?:'in-stock'|'out-of-stock';evidenceUrl:string};
export function activeOffers(slug:string,now=new Date()):Offer[] {return (records as Offer[]).filter(o=>o.productSlug===slug && o.approved && new Date(o.verifiedAt)<=now && new Date(o.expiresAt)>now && /^https:\/\//.test(o.url));}
