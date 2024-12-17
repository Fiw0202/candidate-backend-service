import { Router } from "express";

import { validateRequest } from "../../middleware/payload-validator";
import { ReqCreateCommentDto } from "./dto/request/comment.request.dto";
import { createComment, getComments } from "./comment.controller";

const commentRouter = Router();
/**
 * @swagger
 * /comment:
 *   get:
 *     summary: Get all comment
 *     responses:
 *       200:
 *         description: List of all comments
 */
commentRouter.get("/", getComments);

/**
 * @swagger
 * /comment:
 *   post:
 *     summary: Create a new comment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comment created
 */
commentRouter.post("/", validateRequest(ReqCreateCommentDto), createComment);

commentRouter.get("/test", (req, res) => {
  res.send("Hello comment!");
});

export default commentRouter;
