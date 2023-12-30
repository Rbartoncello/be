import { Router } from "express";
import { login } from "../controllers/authControllers";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *     Auth:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: The username of the user.
 *         password:
 *           type: string
 *           description: The password of the user.
 *  tags:
 *      name: Auth
 *      description: Endpoints related to auth.
 */

/**
 * @swagger
 *  /auth/login:
 *   post:
 *     summary: Login
 *     description: Create a new user with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auth'
 *     responses:
 *        200:
 *          description: Successful response
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Auth'
 *     tags: [Auth]
 */
router.post("/login", login);

export default router;
