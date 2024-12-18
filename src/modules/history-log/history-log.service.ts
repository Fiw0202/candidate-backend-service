import { ReqCreateHistoryLogDto } from "./dto/request/history-log.request.dto";
import { HistoryLogRepository } from "./้history-log.repository";

const historyLogRepository = new HistoryLogRepository();

export const getAllHistoryLogs = async (id: number) => {
  try {
    const historyLogs = await historyLogRepository.findAllHistoryLogs(id);
    return historyLogs;
  } catch (err) {
    console.error("Error historyLogs:", err);
    throw err;
  }
};

export const createHistoryLog = async (
  req: ReqCreateHistoryLogDto,
  userId: number | undefined
) => {
  try {
    if (!userId) {
      throw new Error("UserId is required");
    }

    const newHistoryLog = await historyLogRepository.createHistoryLog(
      req,
      userId
    );

    return {
      id: newHistoryLog.id,
      createdBy: userId,
    };
  } catch (err) {
    console.error("Error creating historyLog:", err);
    throw err;
  }
};
