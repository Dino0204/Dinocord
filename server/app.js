const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.route.js");
const roomRoutes = require("./routes/room.route");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);

app.get("/", (req, res) => {
  res.send("Dinocord API is running");
});

module.exports = app;
