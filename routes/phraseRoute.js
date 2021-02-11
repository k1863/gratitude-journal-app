/* eslint-disable */
const express = require("express");
const router = express.Router();
var moment = require("moment"); // require
const { Mongoose } = require("mongoose");

const Phrase = require("../models/PhraseModel");

//Gets all phrases
router.get("/", async (req, res) => {
  try {
    const phrases = await Phrase.find();
    res.json(phrases);
  } catch (err) {
    res.json({ message: err });
  }
});

//Creates a phrase item
router.post("/", async (req, res) => {
  const phraseItem = new Phrase({
    phrase: req.body.phrase,
  });

  try {
    const savedPhraseItem = await phraseItem.save();
    res.json(savedPhraseItem);
  } catch (err) {
    res.json({ message: err });
  }
});

//Find individual phrase
router.get("/:phraseId", async (req, res) => {
  try {
    const phrase = await Phrase.findById(req.params.phraseId);
    res.json(phrase);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete individual item
router.delete("/:phraseId", async (req, res) => {
  try {
    const removedPhrase = await Phrase.remove({ _id: req.params.phraseId });
    res.json(removedPhrase);
  } catch (err) {
    res.json({ message: err });
  }
});

router.put("/", async (req, res) => {
  const start = moment().startOf("day").toDate(); // set to 12:00 am today
  const end = moment().endOf("end").toDate(); // set to 23:59 pm today
  console.log(req.body);
  console.log(start);
  console.log(end);

  const { phrase, created, updatedAt } = req.body;

  const updatedPost = { phrase, created: Date.now() };
  await Phrase.findOneAndUpdate(
    { created: { $gte: start, $lte: end } },
    updatedPost,
    {
      new: true,
      upsert: true,
    }
  );
  res.json(updatedPost);
});

router.patch("");

module.exports = router;
