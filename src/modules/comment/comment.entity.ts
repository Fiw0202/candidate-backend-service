import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { ICommentEntity } from "./interface/comment.interface";

@Entity("comments")
export class Comment implements ICommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "comment", type: "text", nullable: false })
  comment: string;

  @Column({
    name: "isDelete",
    type: "boolean",
    nullable: false,
    default: false,
  })
  isDelete?: boolean;

  @CreateDateColumn()
  createDate: Date;
}
