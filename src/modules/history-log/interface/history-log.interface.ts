import { Candidate } from "../../candidate/candidate.entity";
import { User } from "../../user/user.entity";

export interface IHistoryEntity {
  id: number;
  candidateTitle: string;
  candidateDescription: string;
  candidateId: number;
  createBy?: User;
  candidate: Candidate;
  createDate: Date;
}
