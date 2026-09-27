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
