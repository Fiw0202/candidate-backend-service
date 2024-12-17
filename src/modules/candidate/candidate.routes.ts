import { Router } from "express";

import { validateRequest } from "../../middleware/payload-validator";
import {
  ReqCreateCandidateDto,
  ReqUpdateArchiveCandidateDto,
  ReqUpdateStatusCandidateDto,
} from "./dto/request/candidate.request.dto";
import {
  createCandidateController,
  getCandidates,
  updateArchiveCandidateController,
  updateStatusCandidateController,
} from "./candidate.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const candidateRouter = Router();
/**
 * @swagger
 * /candidate:
 *   get:
 *     summary: Get all candidate
 *     security:
 *       - bearerAuth: []
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

/**
 * @swagger
 * /candidate/update-archive:
 *   post:
 *     summary: Update a candidate archive
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              id:
 *                 type: number
 *              isArchive:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Candidate updated
 */
candidateRouter.post(
  "/update-archive",
  authMiddleware,
  validateRequest(ReqUpdateArchiveCandidateDto),
  updateArchiveCandidateController
);

/**
 * @swagger
 * /candidate/update-status:
 *   post:
 *     summary: Update a candidate status
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               status:
 *                 type: string
 *                 enum: [To Do, Inprogress, Done,]
 *     responses:
 *       200:
 *         description: Candidate updated
 */
candidateRouter.post(
  "/update-status",
  authMiddleware,
  validateRequest(ReqUpdateStatusCandidateDto),
  updateStatusCandidateController
);

candidateRouter.get("/test", (req, res) => {
  res.send("Hello candidate!");
});

export default candidateRouter;
