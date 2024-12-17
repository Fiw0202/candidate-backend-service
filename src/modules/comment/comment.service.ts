import { CommentRepository } from "./comment.repository";
import { ReqCreateCommentDto } from "./dto/request/comment.request.dto";

const commentRepository = new CommentRepository();

export const getAllComments = async () => {
  try {
    const comments = await commentRepository.findAllComments();
    return comments;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const createComment = async (req: ReqCreateCommentDto) => {
  try {
    const newComment = await commentRepository.createComment(req);
    return {
      comment: newComment.comment,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};
