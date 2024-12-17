import { AppDataSource } from "../../config/database.config";
import { Comment } from "./comment.entity";
import { ReqCreateCommentDto } from "./dto/request/comment.request.dto";
import { User } from "../user/user.entity";

export class CommentRepository {
  private commentRepository = AppDataSource.getRepository(Comment);
  private userRepository = AppDataSource.getRepository(User);

  public async findAllComments(): Promise<Comment[]> {
    return await this.commentRepository.find();
  }

  public async findCommentById(id: number): Promise<Comment | null> {
    return await this.commentRepository.findOneBy({ id });
  }

  public async createComment(
    commentData: ReqCreateCommentDto,
    userId: number
  ): Promise<Comment> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new Error("User not found");
    }
    const newComment = this.commentRepository.create({
      ...commentData,
      createdBy: user,
    });
    return await this.commentRepository.save(newComment);
  }
}
