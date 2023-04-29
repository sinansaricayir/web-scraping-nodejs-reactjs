const Kitapyurdu = require("../models/Kitapyurdu.js");
const express = require("express");
const router = express.Router();

//! get all data
router.get("/get-all", async (req, res) => {
  try {
    const data = await Kitapyurdu.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! create data
router.post("/add-data", async (req, res) => {
  try {
    const data = req.body;
    const bulkOps = data.map((doc) => ({
      updateOne: {
        filter: { title: doc.title },
        update: doc,
        upsert: true,
      },
    }));
    const result = await Kitapyurdu.bulkWrite(bulkOps);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
