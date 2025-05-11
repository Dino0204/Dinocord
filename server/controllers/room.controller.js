const User = require("../models/user.model");
const Room = require("../models/room.model");

// @RestController
exports.create = async (req, res) => {
  const { roomName, ownerName } = req.body;

  if ((!roomName, !ownerName)) {
    return res.status(400).json({ error: "roomName, ownerName is required" });
  }

  const owner = await User.findOne({ name: ownerName });

  if (!owner) {
    return res
      .status(404)
      .json({ error: `This user(${ownerName}) does not exist` });
  }

  const room = await Room.findOne({ name: roomName });

  if (room) {
    return res
      .status(409)
      .json({ error: `This room(${roomName}) already exist` });
  }

  room = await Room.create({
    name: roomName,
    members: [owner],
    owner: owner,
  });

  res.status(200).json({ room });
};
