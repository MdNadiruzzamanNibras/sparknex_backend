const express = require("express");
const { multiple } = require("../config/fileMulter");
const { handleAssistance } = require("../Controller/supportController");
const router = express.Router();

router.post("/assistance", multiple, handleAssistance);

module.exports = router;
