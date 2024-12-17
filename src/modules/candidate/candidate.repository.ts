import { AppDataSource } from "../../config/database.config";
import { Candidate } from "./candidate.entity";
import { User } from "../user/user.entity";
import { ReqCreateCandidateDto } from "./dto/request/candidate.request.dto";

export class CandidateRepository {
  private candidateRepository = AppDataSource.getRepository(Candidate);
  private userRepository = AppDataSource.getRepository(User);

  async findAllCandidates(): Promise<Candidate[]> {
    return await this.candidateRepository.find();
  }

  async createCandidate(
    candidateData: ReqCreateCandidateDto,
    userId: number
  ): Promise<Candidate> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new Error("User not found");
    }

    const newCandidate = this.candidateRepository.create({
      ...candidateData,
      createdBy: user,
    });

    return await this.candidateRepository.save(newCandidate);
  }
}
