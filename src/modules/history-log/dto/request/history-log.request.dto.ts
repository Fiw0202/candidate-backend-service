import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class ReqCreateHistoryLogDto {
  @IsNumber()
  @IsNotEmpty()
  candidateId: number;

  @IsString()
  @IsNotEmpty()
  candidateTitle: string;

  @IsString()
  @IsNotEmpty()
  candidateDescription: string;
}
