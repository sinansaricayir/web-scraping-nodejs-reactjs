const puppeteer = require("puppeteer");
const mongoose = require("mongoose");
require("dotenv").config();

function Kitapyurdu() {
  (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(
      "https://www.kitapyurdu.com/index.php?route=product/search&filter_name=python"
    );

    const productData = await page.$$eval(".product-cr", (products) => {
      return products.map((product) => {
        const title = product.querySelector(".name")?.textContent.trim();
        const publisher = product
          .querySelector(".publisher")
          ?.textContent.trim();
        const writers = Array.from(
          product.querySelectorAll(".author .alt span")
        ).map((writer) => writer.textContent.trim());
        const prices = Array.from(
          product.querySelectorAll(".price-new .value")
        ).map((price) => price.textContent.trim());
        const image = product
          .querySelector(".pr-img-link img")
          ?.getAttribute("src");
        return { title, publisher, writers, prices, image };
      });
    });

    try {
      fetch("http://localhost:4000/api/kitapyurdu/add-data", {
        method: "POST",
        body: JSON.stringify(productData),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
    } catch (error) {
      console.log(error);
    }

    await browser.close();
  })();
}

module.exports = Kitapyurdu;
