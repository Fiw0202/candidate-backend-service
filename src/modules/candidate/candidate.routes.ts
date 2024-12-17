import { Router } from "express";

import { validateRequest } from "../../middleware/payload-validator";
import { ReqCreateCandidateDto } from "./dto/request/candidate.request.dto";
import {
  createCandidateController,
  getCandidates,
} from "./candidate.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const candidateRouter = Router();
/**
 * @swagger
 * /candidate:
 *   get:
 *     summary: Get all candidate
 *     responses:
 *       200:
 *         description: List of all candidates
 */
candidateRouter.get("/", authMiddleware, getCandidates);

/**
 * @swagger
 * /candidate:
 *   post:
 *     summary: Create a new candidate
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              title:
 *                 type: string
 *              description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Candidate created
 */
candidateRouter.post(
  "/",
  authMiddleware,
  validateRequest(ReqCreateCandidateDto),
  createCandidateController
);

candidateRouter.get("/test", (req, res) => {
  res.send("Hello candidate!");
});

export default candidateRouter;
