const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  // access token 발급
  sign: (user) => {
    const { email, password } = user;
    const payload = {
      email,
      password,
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: process.env.JWT_AT_EXPIRES_IN,
    });
  },
  // access token 검증
  verify: (token) => {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return {
        ok: true,
      };
    } catch (err) {
      return {
        ok: false,
        message: err.message,
      };
    }
  },
  // refresh token 발급
  refresh: () => {
    return jwt.sign({}, process.env.JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: process.env.JWT_RT_EXPIRES_IN,
    });
  },
  // refresh token 검증
  refreshVerify: async (token) => {},
};
