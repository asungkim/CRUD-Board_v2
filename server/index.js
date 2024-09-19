const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(body_parser.json());

mongoose
  .connect(process.env.mongoose_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("CRUD 서버 개설");
});

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
