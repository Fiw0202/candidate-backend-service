import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsNumber,
  IsBoolean,
  IsEnum,
} from "class-validator";
import { ECandidateStatus } from "../../../../utils/enum/candidate-status-enum";

export class ReqCreateCandidateDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

export class ReqUpdateArchiveCandidateDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsBoolean()
  @IsNotEmpty()
  isArchive: boolean;
}

export class ReqUpdateStatusCandidateDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsEnum(ECandidateStatus)
  @IsNotEmpty()
  status: ECandidateStatus;
}
