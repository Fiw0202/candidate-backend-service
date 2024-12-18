import { Request, Response } from "express";
import * as HistoryLogService from "./history-log.service";
import { CustomRequest } from "../../middleware/auth.middleware";

export const getHistoryLogs = async (req: Request, res: Response) => {
  try {
    const candidates = await HistoryLogService.getAllHistoryLogs(
      +req.params.id
    );
    res.status(200).json({ success: true, data: candidates });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
