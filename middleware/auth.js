const jwt = require("jsonwebtoken");

module.exports.isAuth = async (req, res, next) => {
    try {
      const decode = jwt.verify(req.headers.authorization , process.env.token)
      req.user = decode;
      next();
    } catch (err) {
      console.log(err);
      return res.json({
        success : false ,
        error : err
      })
    }
  };
  