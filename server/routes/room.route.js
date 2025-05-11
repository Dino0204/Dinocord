const express = require("express");
const router = express.Router();
const authJWT = require("../middleware/authJWT");
const { create } = require("../controllers/room.controller");

// @RequestMapping
router.post("/create", authJWT, create);

module.exports = router;
