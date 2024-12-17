import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export class ReqCreateCommentDto {
  @IsString()
  @IsNotEmpty()
  comment: string;
}
