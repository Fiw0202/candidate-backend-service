import { Router } from "express";
import { getUsers, createUser } from "./user.controller";
import { ReqCreateUserDto } from "./dto/request/user.request.dto";
import { validateRequest } from "../../middleware/payload-validator";
import { authMiddleware } from "../../middleware/auth.middleware";

const userRouter = Router();
/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get all users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all users
 */
userRouter.get("/", authMiddleware, getUsers);

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 */
userRouter.post(
  "/",
  authMiddleware,
  validateRequest(ReqCreateUserDto),
  createUser
);

userRouter.get("/test", (req, res) => {
  res.send("Hello user!");
});

export default userRouter;
