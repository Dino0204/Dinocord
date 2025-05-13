const User = require("../models/user.model");

exports.getUser = async (req, res) => {
  try {
    const { email } = req.user;
    const currentUser = await User.findOne({ email });

    if (!currentUser) {
      return res.status(404).json({
        ok: false,
        message: "사용자를 찾을 수 없습니다",
      });
    }

    return res.status(200).json({
      ok: true,
      user: {
        name: currentUser.name,
        email: currentUser.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};
