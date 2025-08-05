require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const generateRoute = require("./routes/generate.route");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/generate-image", generateRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
