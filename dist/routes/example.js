"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _example = require("../controllers/example");
var router = (0, _express.Router)();

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: The auto-generated ID of the task.
 *        title:
 *          type: string
 *          description: The title of the task.
 *        description:
 *          type: string
 *          description: The description of the task.
 * tags:
 *  name: Tasks
 *  description: Endpoints related to tasks.
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get all tasks
 *    description: Retrieve a list of all tasks.
 *    responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *    tags: [Tasks]
 */
router.get("/tasks", _example.getAll);

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Create a new task
 *    description: Create a new task with the provided data.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *    tags: [Tasks]
 */
router.post("/tasks", _example.save);

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Get a task by ID
 *    description: Retrieve a task by its ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The ID of the task to retrieve.
 *    responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *    tags: [Tasks]
 */
router.get("/tasks/:id", _example.getById);

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: Delete a task by ID
 *    description: Delete a task by its ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The ID of the task to delete.
 *    responses:
 *       200:
 *         description: Successful response
 *    tags: [Tasks]
 */
router["delete"]("/tasks/:id", _example.deleteOne);

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Update a task by ID
 *    description: Update a task by its ID with the provided data.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The ID of the task to update.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *    tags: [Tasks]
 */
router.put("/tasks/:id", _example.editOne);
var _default = exports["default"] = router;