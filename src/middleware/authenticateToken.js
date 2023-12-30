// authMiddleware.js

import jwt from "jsonwebtoken";

const secretKey = "T3sT$JWT"; // Tu clave secreta

export const authenticateToken = (req, res, next) => {
  console.log(req.header("Authorization"));
  const token = req.header("Authorization")?.split(" ")[1]; // Obtén el token Bearer del encabezado Authorization

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Forbidden: Failed to authenticate token" });
    }

    req.user = decoded; // Agrega el objeto decodificado al objeto de solicitud (req) para su uso posterior
    next();
  });
};
