import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const checkTokenExpired = (req, res, next) => {
    const token = req.headers["authorization"];
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.SECRET_KEY);
  };
  