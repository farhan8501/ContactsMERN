const jwt = require("jsonwebtoken");

const config = require("config");

module.exports = function(req, res, next) {
  //get the token from the header
  //x-auth-toke is the key to the token
  const token = req.header("x-auth-token");

  //check if token does not exist
  if (!token) {
    return res.status(401).json({ msg: "no token authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "toke is not valid" });
  }
};
