const User = require("../models/user.model");
const Room = require("../models/room.model");

// @RestController
exports.create = async (req, res) => {
  try {
    const { roomName } = req.body;
    const { email } = req.user;
    const owner = await User.findOne({ email });

    if (!roomName) {
      return res.status(400).json({ error: "roomName is required" });
    }

    if (!owner) {
      return res.status(404).json({ error: `This user does not exist` });
    }

    let room = await Room.findOne({ name: roomName });

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

    return res.status(200).json({ room });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getRooms = async (req, res) => {
  try {
    const { email } = req.user;
    const currentUser = await User.findOne({ email });

    if (!currentUser) {
      return res.status(404).json({
        ok: false,
        message: "사용자를 찾을 수 없습니다",
      });
    }

    const rooms = await Room.find({ members: currentUser._id }).populate(
      "owner",
      "name email"
    );

    return res.status(200).json({
      ok: true,
      rooms,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};
