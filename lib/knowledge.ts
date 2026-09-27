import historyData from '../data/history.json';
import technologyData from '../data/technology.json';
import {headphones,Headphone} from './headphones';
export const history: (Omit<(typeof historyData)[number], 'technologyIds'|'people'|'organizations'> & {technologyIds:string[];people:string[];organizations:string[]})[] = historyData;
export const technologies = technologyData;
export function matchesTechnology(h:Headphone,slug:string){
 if(slug==='open-back')return h.design==='open-back';
 if(slug==='active-noise-cancellation')return h.anc==='yes';
 if(slug==='planar-magnetic')return h.specs.driverTechnology==='planar-magnetic';
 if(slug==='dynamic-driver')return h.specs.driverTechnology==='dynamic';
 return false;
}
export const technologyFor=(h:Headphone)=>technologies.filter(t=>matchesTechnology(h,t.slug));
export const modelsFor=(slug:string)=>headphones.filter(h=>matchesTechnology(h,slug));
