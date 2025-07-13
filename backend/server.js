const express = require("express");
const cors = require("cors");
const { generateMockData } = require("./data");

const app = express();
app.use(cors());

app.get("/api/sensor-data", (req, res) => {
  const data = generateMockData();
  res.json(data);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

