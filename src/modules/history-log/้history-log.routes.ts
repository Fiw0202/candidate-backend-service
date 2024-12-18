import { Router } from "express";

import { validateRequest } from "../../middleware/payload-validator";
import { authMiddleware } from "../../middleware/auth.middleware";
import { getHistoryLogs } from "./้history-log.controller";
import { ReqCreateHistoryLogDto } from "./dto/request/history-log.request.dto";

const historyLogRouter = Router();

/**
 * @swagger
 * /historyLog/{id}:
 *   get:
 *     summary: Get historyLog by candidate Id
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: get historyLog by Id
 *     responses:
 *       200:
 *         description: HistoryLog data
 */
historyLogRouter.get("/:id", authMiddleware, getHistoryLogs);

historyLogRouter.get("/test", (req, res) => {
  res.send("Hello historyLog!");
});

export default historyLogRouter;
