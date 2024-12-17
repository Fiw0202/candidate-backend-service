import { CandidateRepository } from "../candidate/candidate.repository";
import { CommentRepository } from "./comment.repository";
import { ReqCreateCommentDto } from "./dto/request/comment.request.dto";

const commentRepository = new CommentRepository();
const candidateRepository = new CandidateRepository();

export const getAllComments = async () => {
  try {
    const comments = await commentRepository.findAllComments();
    return comments;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const createComment = async (
  req: ReqCreateCommentDto,
  userId: number | undefined
) => {
  try {
    if (!userId) {
      throw new Error("UserId is required");
    }

    const candidate = await candidateRepository.findAllCandidatesById(
      req.candidateId
    );
    if (!candidate) throw new Error("Candidate is required");

    const newComment = await commentRepository.createComment(req, userId);
    return {
      comment: newComment.comment,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};
