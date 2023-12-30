import { dbResponse } from "../constants/messages";
import { createUser } from "../models/userModel";

const handleDatabaseError = (res, error) => {
  res.status(500).json(dbResponse(error.message, false, 404));
};

export const create = async (req, res) => {
  try {
    const { name, lastname, username, password } = req.body;

    const createdUser = await createUser(name, lastname, username, password);

    res.status(200).json(dbResponse(createdUser));
  } catch (error) {
    handleDatabaseError(res, error);
  }
};