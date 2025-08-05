const express = require("express");
const router = express.Router();
const { generateImage } = require("../controllers/generate.controller");

router.post("/", generateImage);

module.exports = router;
