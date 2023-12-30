import { Router } from "express";
import {
  getAll,
  getById,
  save,
  deleteOne,
  editOne,
} from "../controllers/example";
import { authenticateToken } from "../middleware/authenticateToken";

const router = Router();

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
 *        price:
 *          type: number
 *          description: The price of the task.
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
 *    security:
 *      - BearerAuth: []
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
router.get("/tasks", authenticateToken, getAll);

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Create a new task
 *    security:
 *      - BearerAuth: []
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
router.post("/tasks", authenticateToken, save);

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Get a task by ID
 *    security:
 *      - BearerAuth: []
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
router.get("/tasks/:id", authenticateToken, getById);

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: Delete a task by ID
 *    security:
 *      - BearerAuth: []
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
router.delete("/tasks/:id", authenticateToken, deleteOne);

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Update a task by ID
 *    security:
 *      - BearerAuth: []
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
router.put("/tasks/:id", authenticateToken, editOne);

export default router;
