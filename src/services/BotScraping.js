import puppeteer from "puppeteer-extra";
import RecaptchaPlugin from 'puppeteer-extra-plugin-recaptcha';




 export default async function OpenWeb(getPaymet){
    // await browser.close();
    const browser = await puppeteer.launch({
        headless: true,
        slowMo:25

    });
    const page = await browser.newPage();
    
    await page.setViewport({width: 1080, height: 1024});
    await page.goto('https://www.google.com');

    await page.click('.gLFyf');
    await page.keyboard.type(getPaymet);
    await page.keyboard.press("Enter");
    
    
    // const page2 = await browser.newPage();
    // await page2.setViewport({width: 1260, height: 1920});
    // await page2.goto('https://www.google.com');
    
    // await page2.click('.gLFyf');
    // await page2.keyboard.type(getPaymet);
    // await page2.keyboard.press("Enter");
    // await page.waitForSelector("#mh_tsuid_71 > div > div > div.SPZz6b > h2 > span");
    // const ruta=await page2.waitForSelector(".#kp-wp-tab-overview > div.TzHB6b.cLjAic.LMRCfc > div > div > div > div > div > div:nth-child(5) > div > div > div > span.LrzXr");
    // console.log(ruta)
// let Prueba= page2.evaluate(async () => {
//     console.log("hola probando");
//     //    let b= await document.querySelectorAll("#mh_tsuid_57 > div > div > div.SPZz6b > h2 > span");
//     //    console.log(b);
//     return 1+1
//      });
    // console.log(three);
    
    // await page.close();
    await browser.close();
    return "datos obtenidos"
    // await page.close();
    // getInfPayme('https://www.mercadolibre.com.co/');
    
// puppeteer.use(
//   RecaptchaPlugin({
//     provider: {
//       id: '2captcha',
//       token: 'XXXXXXX' // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
//     },
//     visualFeedback: true // colorize reCAPTCHAs (violet = detected, green = solved)
//   })
// )
// puppeteer.launch({ headless: false }).then(async browser => {
//     const page = await browser.newPage()
//     await page.goto('https://www.google.com/recaptcha/api2/demo');
  
//     // That's it, a single line of code to solve reCAPTCHAs 🎉
//     await page.solveRecaptchas()
  
//     await Promise.all([
//       page.waitForNavigation(),
//       page.click(`#recaptcha-demo-submit`)
//     ])
//     await page.screenshot({ path: 'response.png', fullPage: true })
//     // await browser.close();
//   })
    
    

  
//   await browser.close();



}









