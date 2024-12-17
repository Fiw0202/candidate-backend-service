import { Router } from "express";
import userRouter from "./user/user.routes";
import commentRouter from "./comment/comment.routes";
import authRouter from "./auth/auth.routes";
import candidateRouter from "./candidate/candidate.routes";

const router = Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/comment", commentRouter);
router.use("/candidate", candidateRouter);

export default router;
