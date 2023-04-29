const puppeteer = require("puppeteer");
const mongoose = require("mongoose");
require("dotenv").config();

async function Kitapsepeti() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.kitapsepeti.com/arama?q=python");

  const data = await page.$$eval(".productItem", (items) => {
    return items.map((item) => {
      const title = item
        .querySelector(".text-description.detailLink")
        .textContent.trim();
      const publisher = item.querySelector(".text-title.mt").textContent.trim();
      const image = item
        .querySelector(".imgInner img")
        ?.getAttribute("data-src");
      const writer = item.querySelector("#productModelText").textContent.trim();
      const prices = item
        .querySelector(".currentPrice")
        .textContent.trim()
        .slice(0, 5);
      return { title, publisher, writer, prices, image };
    });
  });

  try {
    fetch("http://localhost:4000/api/kitapsepeti/add-data", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
  } catch (error) {
    console.log(error);
  }

  await browser.close();
}

module.exports = Kitapsepeti;
