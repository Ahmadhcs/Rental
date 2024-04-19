import jwt from "jsonwebtoken";
import User from "../Models/User.js";
import Manager from "../Models/Manager.js"

const requireAuth = async (req, res, next) => {
  const { authorization} = req.headers;
  console.log(authorization)

  if (!authorization) return res.status(401).json({ error: "Auth token required" });

  const token = authorization.split(" ")[1];

  try {
    const _id = jwt.verify(token, process.env.SECRET_KEY).userID;
  
      req.userID = await User.findOne({ _id }).select("_id");
      req.userToken = token;
    next();
  } catch (error) {
    res.status(401).json({ error: "Request is not authorized" });
  }
};

export default requireAuth;