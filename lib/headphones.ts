import data from '../data/headphones.json';
export type Headphone = { image?: {url:string;sourceUrl:string;checkedAt:string}; slug: string; brand: string; model: string; design: string; form: string; connection: string; wireless: boolean; anc: string; uses: string[]; specs: Record<string, string | undefined>; sourceUrl: string; checkedAt: string; verification: string };
export const headphones: Headphone[] = data as Headphone[];
export const getHeadphone = (slug: string) => headphones.find(h => h.slug === slug);
export const ancLabel = (value: string) => ({yes:'Yes',no:'No','not-applicable':'Not applicable — passive wired design','not-verified':'Not verified'}[value] || 'Not verified');
export const specLabels: Record<string,string> = {impedance:'Impedance',weight:'Weight',driver:'Driver size',frequency:'Frequency range',battery:'Battery life',codecs:'Bluetooth codecs',waterResistance:'Water resistance',usbAudio:'USB audio',microphone:'Microphone',cable:'Cable'};
export function tradeoffs(h: Headphone) {
 const notes = [h.form === 'in-ear' ? 'A secure ear-tip seal is important for isolation and bass response.' : h.design === 'closed-back' ? 'Isolation depends on fit and seal. A closed enclosure alone does not establish measured noise reduction.' : 'Sound escapes through the enclosure. Choose a quiet room; avoid use near an open recording microphone.'];
 if(h.wireless) notes.push('Battery figures are manufacturer claims, not HeadphonesBase measurements. Wireless latency, codecs and call quality depend on the source device and mode.');
 else notes.push('Check your source connector and output capability. Impedance alone does not determine amplifier requirements.');
 if(h.form === 'in-ear') notes.push('Ear-tip fit changes bass and isolation. Try the supplied sizes before judging the sound.');
 if(h.anc === 'not-verified') notes.push('ANC has not been established from the reviewed source; do not assume it is present.');
 return notes;
}
