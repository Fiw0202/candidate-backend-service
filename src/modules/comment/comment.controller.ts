import { Request, Response } from "express";
import * as CommentService from "./comment.service";

export const getComments = async (req: Request, res: Response) => {
  const comments = await CommentService.getAllComments();
  res.status(200).json({ success: true, data: comments });
};

export const createComment = async (req: Request, res: Response) => {
  const newComment = await CommentService.createComment(req.body);
  res.status(201).json({ success: true, data: newComment });
};
