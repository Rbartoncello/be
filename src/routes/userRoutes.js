import { Router } from "express";
import { create } from "../controllers/userControllers";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user.
 *         lastname:
 *           type: string
 *           description: The lastname of the user.
 *         username:
 *           type: string
 *           description: The username of the user.
 *         password:
 *           type: string
 *           description: The password of the user.
 *  tags:
 *      name: User
 *      description: Endpoints related to user.
 */

/**
 * @swagger
 *  /users:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *        200:
 *          description: Successful response
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *     tags: [User]
 */
router.post('/users', create);

export default router;
