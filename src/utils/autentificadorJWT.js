import jwt from "jsonwebtoken";
import { createHash } from "crypto";
import { hostname } from "os";

export class JWTAuthenticator {
  constructor() {}
  #secretKey = "T3sT$JWT";
  #encryptionAlgorithm = "HS256";

  createToken = (data) => {
    const now = Math.floor(Date.now() / 1000);
    const payload = {
      iat: now,
      exp: now + 60, // 60 segundos de duración del token
      aud: this.aud(),
      data: data,
      app: "Test JWT",
    };
    return jwt.sign(payload, this.#secretKey, {
      algorithm: this.#encryptionAlgorithm,
    });
  };

  verifyToken = async (token) => {
    if (!token) {
      throw new Error("The token is empty.");
    }

    try {
      const decoded = await jwt.verify(token, this.#secretKey, {
        algorithms: [this.#encryptionAlgorithm],
      });
      if (decoded.aud !== this.aud()) {
        throw new Error("Not a valid user.");
      }
    } catch (error) {
      throw error;
    }
  };

  getPayload = (token) => {
    if (!token) {
      throw new Error("The token is empty.");
    }

    return jwt.decode(token, this.#secretKey, {
      algorithms: [this.#encryptionAlgorithm],
    });
  };

  getData = (token) => {
    return this.getPayload(token).data;
  };

  aud = () => {
    let aud = "";

    if (typeof window !== "undefined") {
      aud = window.location.href;
    } else {
      aud = "server";
    }

    aud += process.env.USER_AGENT || "";
    aud += hostname();

    return createHash("sha1").update(aud).digest("hex");
  };
}
