import { AppDataSource } from "../../config/database.config";

import { User } from "../user/user.entity";
import { ReqCreateHistoryLogDto } from "./dto/request/history-log.request.dto";
import { HistoryLog } from "./history-log.entity";

export class HistoryLogRepository {
  private historyLogRepository = AppDataSource.getRepository(HistoryLog);
  private userRepository = AppDataSource.getRepository(User);

  public async findAllHistoryLogs(id: number): Promise<HistoryLog[]> {
    return await this.historyLogRepository.find({
      where: { id: id },
      relations: { candidate: true },
    });
  }

  public async createHistoryLog(
    historyLogData: ReqCreateHistoryLogDto,
    userId: number
  ): Promise<HistoryLog> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new Error("User not found");
    }

    const newHistoryLog = this.historyLogRepository.create({
      ...historyLogData,
      createBy: user,
    });

    return await this.historyLogRepository.save(newHistoryLog);
  }
}
