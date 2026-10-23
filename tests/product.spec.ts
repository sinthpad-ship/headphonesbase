import {test,expect} from '@playwright/test';
test('browse, filter, compare and clear',async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/headphones/');await expect(page.locator('.product-card')).toHaveCount(54);
 await page.getByLabel('Find a model').fill('WH-1000XM6');await expect(page.locator('.product-card')).toHaveCount(1);
 await page.getByRole('link',{name:'Compare +'}).click();await expect(page.getByLabel('Headphone 1',{exact:true})).toHaveValue('sony-wh-1000xm6');
 await page.getByLabel('Headphone 2',{exact:true}).selectOption('audio-technica-ath-m50x');await expect(page.locator('thead th')).toHaveCount(3);
 await page.getByLabel('Show differences only').check();await expect(page.locator('tbody')).toContainText('Not applicable');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBeTruthy();
 await page.getByRole('button',{name:'Clear selection'}).click();await expect(page.getByText('Start with two models.')).toBeVisible();expect(errors).toEqual([]);
});
test('profiles and guide layouts',async({page})=>{
 for(const path of ['/','/headphones/audio-technica-ath-m50x/','/best/studio/','/categories/','/categories/gaming/']){
  await page.goto(path);await expect(page.locator('h1')).toHaveCount(1);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBeTruthy();
 }
});

test('history filters, evidence pages and technology discovery',async({page})=>{
 await page.goto('/history/');await expect(page.locator('.timeline>li')).toHaveCount(6);
 await page.getByLabel('Search history').fill('Mercadier');await expect(page.locator('.timeline>li')).toHaveCount(1);
 await page.getByRole('link',{name:'Read the evidence →'}).click();await expect(page.locator('h1')).toContainText('Mercadier');
 await expect(page.getByRole('link',{name:'US454138A: Mercadier bi-telephone ↗'})).toHaveAttribute('href','https://patents.google.com/patent/US454138A/en');
 await page.goto('/headphones/?driver=planar-magnetic');await expect(page.locator('.product-card')).toHaveCount(4);
 await page.goto('/technology/planar-magnetic/');await expect(page.locator('.product-card')).toHaveCount(4);
 await page.goto('/headphones/audeze-mm-100/');await expect(page.getByText('Source conflict: cable')).toBeVisible();
 for(const path of ['/history/','/technology/','/data/']){await page.goto(path);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBeTruthy();}
});

test('Amazon links disclose commissions and preserve tracking and variants',async({page})=>{
 const offers=[['audio-technica-ath-m50x','B00HVLUR86','Black'],['sony-wh-1000xm5','B0BXYCS74H','Midnight Blue'],['sony-wh-1000xm6','B0F3PQHWTZ','Black'],['bose-quietcomfort-ultra-headphones-2nd-gen','B0FDKQ2FG6','Driftwood Sand']];
 for(const [slug,asin,variant] of offers){
  await page.goto('/headphones/'+slug+'/');
  const section=page.locator('section').filter({has:page.getByRole('heading',{name:'Where to buy',exact:true})});
  const link=section.getByRole('link',{name:/View at Amazon.com/});
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute('href','https://www.amazon.com/dp/'+asin+'?tag=headphonesbas-20');
  await expect(link).toHaveAttribute('rel',/sponsored/);
  await expect(section).toContainText('As an Amazon Associate I earn from qualifying purchases.');
  await expect(section).toContainText(variant);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBeTruthy();
 }
});

test('retailer links appear in catalogue, profile hero and comparison',async({page})=>{
 await page.goto('/headphones/');
 await page.getByLabel('Find a model').fill('DT 770 PRO');
 const card=page.locator('.product-card').filter({has:page.getByRole('heading',{name:'DT 770 PRO',exact:true})});
 await expect(card.getByRole('link',{name:/View at Amazon.com/})).toHaveAttribute('href','https://www.amazon.com/dp/B0016MNAAI?tag=headphonesbas-20');
 await expect(card).toContainText('80 ohm');
 await page.goto('/headphones/sennheiser-hd-600/');
 await expect(page.locator('.profile-hero').getByRole('link',{name:/View at Amazon.com/})).toHaveAttribute('href','https://www.amazon.com/dp/B00004SY4H?tag=headphonesbas-20');
 await page.goto('/compare/?models=sennheiser-hd-600,sennheiser-hd-650');
 const row=page.getByRole('row').filter({has:page.getByRole('rowheader',{name:'Retailer links',exact:true})});
 await expect(row.getByRole('link',{name:/View at Amazon.com/})).toHaveCount(2);
 await expect(row).toContainText('As an Amazon Associate');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBeTruthy();
});
