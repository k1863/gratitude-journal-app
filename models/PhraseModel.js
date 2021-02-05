const mongoose = require("mongoose");

const PhraseSchema = mongoose.Schema(
  {
    phrase: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Phrases", PhraseSchema);
