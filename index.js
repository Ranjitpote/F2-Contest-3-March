const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://ssc.nic.in/");

  await browser.close();
})();
