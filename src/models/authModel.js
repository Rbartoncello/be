import { connect } from "../database";

export const getByUsername = async (username) => {
  const connection = await connect();

  const result = await connection.query(
    "SELECT * FROM `users` WHERE `username` = ?",
    [username]
  );

  return result[0];
};

export const getById = async (userId) => {
  const connection = await connect();

  const result = await connection.query(
    "SELECT * FROM `users` WHERE `id` = ?",
    [userId]
  );

  return result[0];
};
