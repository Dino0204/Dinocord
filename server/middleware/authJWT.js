const { verify } = require("../util/jwt-util");

const authJWT = (req, res, next) => {
  if (req.headers.authorization) {
    // header에서 access token을 가져옵니다.
    const token = req.headers.authorization.split("Bearer ")[1];

    const result = verify(token); // token을 검증합니다.

    console.log(result);

    // token이 검증되었으면 req에 값을 세팅하고, 다음 콜백함수로 갑니다.
    if (result.ok) {
      req.user = { name: result.name, email: result.email };
      next();
    }
    // 검증에 실패하거나 토큰이 만료되었다면 클라이언트에게 메세지를 담아서 응답합니다.
    else {
      res.status(401).send({
        ok: false,
        message: result.message, // jwt가 만료되었다면 메세지는 'jwt expired'입니다.
      });
    }
  } else {
    res.status(401).send({
      ok: false,
      message: "No token provided",
    });
  }
};

module.exports = authJWT;
