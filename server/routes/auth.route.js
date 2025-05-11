const express = require("express");
const router = express.Router();
const authJWT = require("../middleware/authJWT");
const { signin, signup } = require("../controllers/auth.controller");

// @RequestMapping
router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
