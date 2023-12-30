import { connect } from "../database";
import { generarHashPassword } from "../utils/authHelpers.js";

export const createUser = async (name, lastname, username, password) => {
  const connection = await connect();
  const hashedPassword = await generarHashPassword(password);

  const response = await connection.query(
    "INSERT INTO `users` (`name`, `lastname`, `username`, `password`) VALUES (?, ?, ?, ?)",
    [name, lastname, username, hashedPassword]
  );

  return {
    id: response[0].insertId,
    name,
    lastname,
    username,
  };
};

export const getByUsername = async (username) => {
  const connection = await connect();

  const [response] = await connection.query(
    "SELECT * FROM `users` WHERE username= ? ",
    [username]
  );

  if(!response){
    throw new Error("not found");
  }

  return response;
};
