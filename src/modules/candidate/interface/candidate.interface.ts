import { ECandidateStatus } from "../../../utils/enum/candidate-status-enum";

export interface ICandidateEntity {
  id: number;
  title: string;
  description: string;
  status: ECandidateStatus;
  createDate: Date;
}
