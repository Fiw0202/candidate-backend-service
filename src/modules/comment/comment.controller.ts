import { Request, Response } from "express";
import * as CommentService from "./comment.service";
import { CustomRequest } from "../../middleware/auth.middleware";

export const getComments = async (req: Request, res: Response) => {
  const comments = await CommentService.getAllComments();
  res.status(200).json({ success: true, data: comments });
};

export const createComment = async (req: CustomRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    const newComment = await CommentService.createComment(req.body, userId);
    res.status(201).json({ success: true, data: newComment });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
