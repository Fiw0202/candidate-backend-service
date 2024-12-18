import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { IHistoryEntity } from "./interface/history-log.interface";
import { User } from "../user/user.entity";
import { Candidate } from "../candidate/candidate.entity";

@Entity("history")
export class HistoryLog implements IHistoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "postTitle", type: "varchar", length: 255, nullable: false })
  candidateTitle: string;

  @Column({
    name: "candidateDescription",
    type: "varchar",
    length: 255,
    nullable: false,
  })
  candidateDescription: string;

  @Column({
    name: "candidateId",
    type: "int",
    nullable: false,
  })
  candidateId: number;

  @ManyToOne(() => User, (user) => user.history)
  @JoinColumn({ name: "createBy" })
  createBy?: User;

  @ManyToOne(() => Candidate, (candidate) => candidate.historyLog)
  @JoinColumn({ name: "candidate" })
  candidate: Candidate;

  @CreateDateColumn()
  createDate: Date;
}
