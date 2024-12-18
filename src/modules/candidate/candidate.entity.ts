import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ICandidateEntity } from "./interface/candidate.interface";
import { ECandidateStatus } from "../../utils/enum/candidate-status-enum";
import { User } from "../user/user.entity";
import { Comment } from "../comment/comment.entity";
import { HistoryLog } from "../history-log/history-log.entity";

@Entity("candidate")
export class Candidate implements ICandidateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "title", type: "varchar", length: 255, nullable: false })
  title: string;

  @Column({ name: "description", type: "text", nullable: true })
  description: string;

  @Column({
    name: "status",
    type: "enum",
    enum: ECandidateStatus,
    default: ECandidateStatus.TODO,
  })
  status: ECandidateStatus;

  @Column({
    name: "isArchive",
    type: "boolean",
    nullable: false,
    default: false,
  })
  isArchive?: boolean;

  @CreateDateColumn()
  createDate: Date;

  @ManyToOne(() => User, (user) => user.candidates, { nullable: false })
  @JoinColumn({ name: "createdBy" })
  createdBy: User;

  @OneToMany(() => Comment, (comment) => comment.candidate)
  comments: Comment[];

  @OneToMany(() => HistoryLog, (historyLog) => historyLog.candidate)
  historyLog: HistoryLog;
}
