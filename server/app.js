const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.route.js");
const roomRoutes = require("./routes/room.route");
const userRoutes = require("./routes/user.route.js");

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Dinocord API is running");
});

module.exports = app;
