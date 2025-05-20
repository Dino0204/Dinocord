const mongoose = require("mongoose");

const friendshipSchema = new mongoose.Schema(
  {
    fromUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    toUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isFriend: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// 중복 친구 관계 방지를 위한 복합 인덱스
friendshipSchema.index({ fromUser: 1, toUser: 1 }, { unique: true });

// 받은 친구 요청 조회
friendshipSchema.statics.getFriendRequests = async function (userId) {
  return this.find({
    toUser: userId,
    isFriend: false,
  }).populate("fromUser", "username avatar");
};

// 보낸 친구 요청 조회
friendshipSchema.statics.getSentRequests = async function (userId) {
  return this.find({
    fromUser: userId,
    isFriend: false,
  }).populate("toUser", "username avatar");
};

// 현재 친구 목록 조회
friendshipSchema.statics.getFriends = async function (userId) {
  const friends = await this.find({
    $or: [
      { fromUser: userId, isFriend: true },
      { toUser: userId, isFriend: true },
    ],
  }).populate("fromUser toUser", "username avatar");

  return friends.map((friendship) => {
    if (friendship.fromUser._id.toString() === userId.toString()) {
      return friendship.toUser;
    }
    return friendship.fromUser;
  });
};

module.exports = mongoose.model("Friendship", friendshipSchema);
