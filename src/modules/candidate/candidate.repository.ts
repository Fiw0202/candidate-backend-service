import { AppDataSource } from "../../config/database.config";
import { Candidate } from "./candidate.entity";
import { User } from "../user/user.entity";
import {
  ReqCreateCandidateDto,
  ReqUpdateArchiveCandidateDto,
  ReqUpdateStatusCandidateDto,
} from "./dto/request/candidate.request.dto";

export class CandidateRepository {
  private candidateRepository = AppDataSource.getRepository(Candidate);
  private userRepository = AppDataSource.getRepository(User);

  public async findAllCandidates(): Promise<Candidate[]> {
    return await this.candidateRepository.find({
      where: { isArchive: false },
      relations: { createdBy: true, comments: true },
    });
  }

  public async findAllCandidatesById(id: number): Promise<Candidate | null> {
    return await this.candidateRepository.findOneBy({ id });
  }

  public async createCandidate(
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

  public async updateArchiveCandidate(
    req: ReqUpdateArchiveCandidateDto
  ): Promise<Candidate> {
    const candidate = await this.candidateRepository.findOneBy({ id: req.id });

    if (!candidate) {
      throw new Error("Candidate not found");
    }

    candidate.isArchive = req.isArchive;

    const updatedCandidate = await this.candidateRepository.save(candidate);

    return updatedCandidate;
  }

  public async updateStatusCandidate(
    req: ReqUpdateStatusCandidateDto
  ): Promise<Candidate> {
    const candidate = await this.candidateRepository.findOneBy({ id: req.id });

    if (!candidate) {
      throw new Error("Candidate not found");
    }

    candidate.status = req.status;

    const updatedCandidate = await this.candidateRepository.save(candidate);

    return updatedCandidate;
  }
}
