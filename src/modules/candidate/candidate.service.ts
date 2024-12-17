import { CandidateRepository } from "./candidate.repository";
import { ReqCreateCandidateDto } from "./dto/request/candidate.request.dto";

const candidateRepository = new CandidateRepository();

export const getAllCandidates = async () => {
  try {
    const candidates = await candidateRepository.findAllCandidates();
    return candidates;
  } catch (err) {
    console.error("Error fetching candidates:", err);
    throw err;
  }
};

export const createCandidate = async (
  req: ReqCreateCandidateDto,
  userId: number | undefined
) => {
  try {
    if (!userId) {
      throw new Error("UserId is required");
    }

    const newCandidate = await candidateRepository.createCandidate(req, userId);

    return {
      id: newCandidate.id,
      title: newCandidate.title,
      createdBy: userId,
    };
  } catch (err) {
    console.error("Error creating candidate:", err);
    throw err;
  }
};
