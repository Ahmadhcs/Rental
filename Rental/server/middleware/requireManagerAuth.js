

const requireManagerAuth = async (req, res, next) => {
  const { authorization} = req.headers;


  if (!authorization) return res.status(401).json({ error: "Auth token required" });

  next()

};

export default requireManagerAuth;