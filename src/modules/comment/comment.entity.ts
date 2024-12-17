import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { ICommentEntity } from "./interface/comment.interface";
import { Candidate } from "../candidate/candidate.entity";
import { User } from "../user/user.entity";

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

  @Column({
    name: "candidateId",
    type: "int",
    nullable: false,
  })
  candidateId: number;

  @ManyToOne(() => Candidate, (candidate) => candidate.comments, {
    nullable: false,
  })
  @JoinColumn({ name: "candidateId" })
  candidate: Candidate;

  @ManyToOne(() => User, (user) => user.comments, { nullable: false })
  @JoinColumn({ name: "createdBy" })
  createdBy: User;
}
