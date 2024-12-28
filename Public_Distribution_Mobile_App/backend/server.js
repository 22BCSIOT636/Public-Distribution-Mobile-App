const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/public_distribution", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const StockSchema = new mongoose.Schema({
  center: String,
  item: String,
  quantity: Number,
  lastUpdated: Date,
});
const Stock = mongoose.model("Stock", StockSchema);

// API Routes
app.get("/stocks", async (req, res) => {
  const stocks = await Stock.find();
  res.json(stocks);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
