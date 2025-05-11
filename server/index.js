const http = require("http");
const mongoose = require("mongoose");
const { Server } = require("socket.io");

const app = require("./app");
const socketHandler = require("./sockets");

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

socketHandler(io);

// MongoDB 연결
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("📦 MongoDB connected");

    const port = 8082;

    httpServer.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
