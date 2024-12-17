import { Request, Response } from "express";
import { getAllCandidates, createCandidate } from "./candidate.service";
import { CustomRequest } from "../../middleware/auth.middleware";

export const getCandidates = async (req: Request, res: Response) => {
  try {
    const candidates = await getAllCandidates();
    res.status(200).json({ success: true, data: candidates });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createCandidateController = async (
  req: CustomRequest,
  res: Response
) => {
  try {
    const userId = req.user?.id;
    const newCandidate = await createCandidate(req.body, userId);
    res.status(201).json({ success: true, data: newCandidate });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
