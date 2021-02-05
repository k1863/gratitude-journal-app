const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const URI = require("./config/config");

const PORT = process.env.PORT || 5000;

//import items route
// const itemsRoute = require("./routes/itemRoute");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

mongoose.connect(process.env.MONGODB_URI || URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//when successfully connected
mongoose.connection.on("connected", () => {
  console.log("Established Mongoose Default Connection");
});

//When connection throws an error
mongoose.connection.on("error", (err) => {
  console.log("Mongoose Default Connection Error: " + err);
});

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.send("Welcome home");
});
// app.use("api/items", itemsRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
