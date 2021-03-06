const mongoose = require("mongoose");

const PhraseSchema = mongoose.Schema(
  {
    phrase: {
      type: String,
      required: true,
    },
    currentUser: {
      type: String,
      required: true,
    },
    created: {
      type: Date,
      default: Date.now,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Phrase", PhraseSchema);
