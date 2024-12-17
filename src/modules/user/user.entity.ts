import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Unique,
} from "typeorm";
import { IUserEntity } from "./interface/user.interface";
import { Candidate } from "../candidate/candidate.entity";
import { Comment } from "../comment/comment.entity";

@Entity("users")
export class User implements IUserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "firstname", type: "varchar", length: 50, nullable: false })
  firstName: string;

  @Column({ name: "lastname", type: "varchar", length: 50, nullable: false })
  lastName: string;

  @Column({ name: "email", type: "varchar", length: 100, nullable: false })
  @Unique(["email"])
  email: string;

  @Column({ name: "password", type: "varchar", length: 255, nullable: false })
  password: string;

  @OneToMany(() => Candidate, (candidate) => candidate.createdBy)
  candidates: Candidate[];

  @OneToMany(() => Comment, (comment) => comment.createdBy)
  comments: Comment[];
}
