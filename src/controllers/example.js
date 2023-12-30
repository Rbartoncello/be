import { dbResponse } from "../constants/messages";
import { connect } from "../database";

const handleDatabaseError = (res, error) => {
  res.json(dbResponse(error.message, false, 404));
};

export const getAll = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query(
      "SELECT * FROM example WHERE deleted = 0"
    );
    res.json(dbResponse(rows));
  } catch (error) {
    handleDatabaseError(res, error);
  }
};

export const getById = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query(
      "SELECT * FROM example WHERE id = ?",
      [req.params.id]
    );
    res.json(dbResponse(rows));
  } catch (error) {
    handleDatabaseError(res, error);
  }
};

export const save = async (req, res) => {
  try {
    const connection = await connect();
    const { title, price, description } = req.body;

    const response = await connection.query(
      "INSERT INTO `example`(`title`, `price`,`description`) VALUES (?, ?, ?)",
      [title, price, description]
    );

    const newSave = {
      id: response[0].insertId,
      ...req.body,
    };

    res.json(dbResponse(newSave));
  } catch (error) {
    handleDatabaseError(res, error);
  }
};

export const editOne = async (req, res) => {
  try {
    const connection = await connect();
    const { id } = req.params;

    const response = await connection.query(
      "UPDATE `example` SET ? WHERE id = ?",
      [req.body, id]
    );

    if (!response[0].affectedRows) {
      throw new Error(`id: ${id} does not exist`);
    }

    res.json(dbResponse(`id: ${id} was edited`));
  } catch (error) {
    handleDatabaseError(res, error);
  }
};

export const deleteOne = async (req, res) => {
  try {
    const connection = await connect();
    const { id } = req.params;

    await connection.query("UPDATE `example` SET `deleted`= 1 WHERE id=?", [
      id,
    ]);

    res.json(dbResponse(`id: ${id} was deleted`));
  } catch (error) {
    handleDatabaseError(res, error);
  }
};
