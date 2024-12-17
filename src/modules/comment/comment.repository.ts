import { AppDataSource } from "../../config/database.config";
import { Repository } from "typeorm";
import { Comment } from "./comment.entity";

export class CommentRepository {
  private commentRepository: Repository<Comment>;

  constructor() {
    this.commentRepository = AppDataSource.getRepository(Comment);
  }

  public async findAllComments(): Promise<Comment[]> {
    return await this.commentRepository.find();
  }

  public async findCommentById(id: number): Promise<Comment | null> {
    return await this.commentRepository.findOneBy({ id });
  }

  public async createComment(commentData: Partial<Comment>): Promise<Comment> {
    const newComment = this.commentRepository.create(commentData);
    return await this.commentRepository.save(newComment);
  }
}
