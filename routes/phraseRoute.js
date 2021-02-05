const express = require("express");
const router = express.Router();
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

router.patch("/:phraseId", async (req, res) => {
  try {
    const updatedPhrase = await Phrase.updateOne({ _id: req.params.phraseId });

    res.json(updatedPhrase);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
