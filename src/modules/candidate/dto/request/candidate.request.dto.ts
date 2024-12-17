import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export class ReqCreateCandidateDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
