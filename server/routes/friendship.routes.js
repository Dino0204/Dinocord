const express = require("express");
const router = express.Router();
const {
  sendFriendRequest,
  getFriendRequests,
  getSentRequests,
  acceptFriendRequest,
  getFriends,
} = require("../controllers/friendship.controller");
const { verifyToken } = require("../middleware/auth");

// 모든 라우트에 인증 미들웨어 적용
router.use(verifyToken);

// 친구 요청 보내기
router.post("/request", sendFriendRequest);

// 받은 친구 요청 목록 조회
router.get("/requests/:userId", getFriendRequests);

// 보낸 친구 요청 목록 조회
router.get("/sent-requests/:userId", getSentRequests);

// 친구 요청 수락
router.put("/accept", acceptFriendRequest);

// 친구 목록 조회
router.get("/friends/:userId", getFriends);

module.exports = router;
