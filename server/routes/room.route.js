const express = require("express");
const router = express.Router();
const authJWT = require("../middleware/authJWT");
const { create, getRooms } = require("../controllers/room.controller");

// @RequestMapping
router.post("/create", authJWT, create);
router.get("/current", authJWT, getRooms);

module.exports = router;
