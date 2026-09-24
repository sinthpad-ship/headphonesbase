import type { Metadata } from 'next';
export const origin = 'https://headphonesbase.com';
export function pageMeta(title:string,description:string,path:string):Metadata {return {title,description,alternates:{canonical:path},openGraph:{title,description,url:origin+path,type:'website',siteName:'HeadphonesBase'},twitter:{card:'summary',title,description}};}
export function breadcrumbs(items: {name:string;path:string}[]) {return {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{name:'Home',path:'/'},...items].map((i,n)=>({'@type':'ListItem',position:n+1,name:i.name,item:origin+i.path}))};}
