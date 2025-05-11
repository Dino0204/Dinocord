const User = require("../models/user.model");
const { sign, refresh } = require("../util/jwt-util");

// @RestController
exports.signin = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name | !email | !password) {
    return res.status(400).json({ error: "All field is required" });
  }

  const user = await User.findOne({ name, email, password });

  if (!user) {
    return res.status(404).json({ error: "Can't find user" });
  }
  const accessToken = sign(user);
  const refreshToken = refresh();

  res.status(200).json({
    accessToken,
    refreshToken,
  });
};

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name | !email | !password) {
    return res.status(400).json({ error: "All field is required" });
  }

  let user = await User.findOne({ email });

  if (user) {
    return res.status(409).json({ error: "Already Signed Account Email" });
  }
  user = await User.create({ name, email, password });

  res.status(200).json({ user });
};
