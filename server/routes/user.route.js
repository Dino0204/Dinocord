const express = require("express");
const router = express.Router();
const authJWT = require("../middleware/authJWT");
const { getUser } = require("../controllers/user.controller");

// @RequestMapping
router.get("/current", authJWT, getUser);

module.exports = router;
