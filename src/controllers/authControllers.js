import { dbResponse } from "../constants/messages";
import { getByUsername } from "../models/authModel";
import { verificarPassword } from "../utils/authHelpers.js";
import { JWTAuthenticator } from "../utils/autentificadorJWT.js";

const handleDatabaseError = (res, error) => {
  res.status(500).json(dbResponse(error.message, false, 404));
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const [user] = await getByUsername(username);

    if (!user) {
      throw new Error("User not found");
    }

    const checkPassword = await verificarPassword(password, user.password);

    if (!checkPassword) {
      throw new Error("Username or password is incorrect");
    }
    const autentificador = new JWTAuthenticator();

    const token = autentificador.createToken(user);

    res.status(200).json(dbResponse({ token: token, ...user }));
  } catch (error) {
    handleDatabaseError(res, error);
  }
};
