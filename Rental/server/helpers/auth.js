import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


export const hashedPassword = (password) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(12, (err, salt) => {
        if (err) {
          reject(err);
        }
  
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            reject(err);
          }
          resolve(hash);
        });
      });
    });
  };

export const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
  };
  

  export const generateToken = (ID) => {
    return jwt.sign({ ID }, process.env.SECRET_KEY, { expiresIn: "24h" });
  };
  