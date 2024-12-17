import { Router } from "express";
import userRouter from "./user/user.routes";
import commentRouter from "./comment/comment.routes";
import authRouter from "./auth/auth.routes";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/comments", commentRouter);

export default router;
