import puppeteer from "puppeteer";


async function OpenWeb(){
    const browser = await puppeteer.launch({
        headless: false,
        slowMo:200

    });
    const page = await browser.newPage();
    // Set screen size
    //   await page.setViewport({width: 1080, height: 1024});
    // Navigate the page to a URL
    await page.goto('https://www.google.com');

    await page.click('.gLFyf');
    await page.keyboard.type("Amarres en chicago");
    
    

  
//   await browser.close();



}

OpenWeb();