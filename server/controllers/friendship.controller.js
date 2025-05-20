const Friendship = require("../models/friendShip.model");
const { handleError } = require("../util/error");

exports.sendFriendRequest = async (req, res) => {
  try {
    const { fromUserId, toUserId } = req.body;

    const friendship = new Friendship({
      fromUser: fromUserId,
      toUser: toUserId,
    });

    await friendship.save();
    res.status(200).json({ message: "친구 요청을 보냈습니다." });
  } catch (error) {
    handleError(res, error);
  }
};

exports.getFriendRequests = async (req, res) => {
  try {
    const requests = await Friendship.getFriendRequests(req.params.userId);
    res.status(200).json(requests);
  } catch (error) {
    handleError(res, error);
  }
};

exports.getSentRequests = async (req, res) => {
  try {
    const requests = await Friendship.getSentRequests(req.params.userId);
    res.status(200).json(requests);
  } catch (error) {
    handleError(res, error);
  }
};

exports.acceptFriendRequest = async (req, res) => {
  try {
    const { fromUserId, toUserId } = req.body;

    await Friendship.findOneAndUpdate(
      { fromUser: fromUserId, toUser: toUserId },
      { isFriend: true }
    );

    res.status(200).json({ message: "친구 요청을 수락했습니다." });
  } catch (error) {
    handleError(res, error);
  }
};

exports.getFriends = async (req, res) => {
  try {
    const friends = await Friendship.getFriends(req.params.userId);
    res.status(200).json(friends);
  } catch (error) {
    handleError(res, error);
  }
};
