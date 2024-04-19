import jwt from "jsonwebtoken";
import User from "../Models/User.js";

const requireAuth = async (req, res, next) => {
  const { authorization} = req.headers;

  if (!authorization) return res.status(401).json({ error: "Auth token required" });

  next()

};

export default requireAuth;