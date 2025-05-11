const User = require("../models/user.model");
const Room = require("../models/room.model");
const Message = require("../models/message.model");

function socketHandler(io) {
  io.on("connection", (socket) => {
    console.log(`${socket.id} is connected`);
  });
}

module.exports = socketHandler;
