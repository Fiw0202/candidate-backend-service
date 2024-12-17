import { ECandidateStatus } from "../../../utils/enum/candidate-status-enum";
import { User } from "../../user/user.entity";
import { Comment } from "../../comment/comment.entity";

export interface ICandidateEntity {
  id: number;
  title: string;
  description: string;
  status: ECandidateStatus;
  isArchive?: boolean;
  createDate: Date;
  createdBy: User;
  comments: Comment[];
}
