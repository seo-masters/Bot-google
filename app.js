import puppeteer from "puppeteer-extra";
import RecaptchaPlugin from 'puppeteer-extra-plugin-recaptcha';




async function OpenWeb(){
    // await browser.close();
    const browser = await puppeteer.launch({
        headless: false,
        slowMo:200

    });
    const page = await browser.newPage();
    
    await page.setViewport({width: 1080, height: 1024});
    await page.goto('https://www.google.com');

    await page.click('.gLFyf');
    await page.keyboard.type("facebook");
    await page.keyboard.press("Enter");
    
    
    const page2 = await browser.newPage();
    await page2.setViewport({width: 1080, height: 1024});
    await page2.goto('https://www.google.com');
    
    await page2.click('.gLFyf');
    await page2.keyboard.type("mercantil");
    await page2.keyboard.press("Enter");
    await page.close();
    // await page.close();
    // getInfPayme('https://www.mercadolibre.com.co/');
    // await browser.close();
    
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
//     // await browser.close()
//   })
    
    

  
//   await browser.close();



}

OpenWeb();




