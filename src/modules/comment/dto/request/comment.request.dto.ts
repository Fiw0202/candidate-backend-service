import { IsString, IsNotEmpty, IsEmail, IsNumber } from "class-validator";

export class ReqCreateCommentDto {
  @IsString()
  @IsNotEmpty()
  comment: string;

  @IsNumber()
  @IsNotEmpty()
  candidateId: number;
}
