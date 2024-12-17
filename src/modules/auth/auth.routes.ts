import { Router } from "express";
import { login } from "./auth.service";
import { validateRequest } from "../../middleware/payload-validator";
import { LoginDto } from "./dto/request/auth.request.dto";

const authRouter = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     description: Login with email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             schema:
 *             type: object
 *             properties:
 *              email:
 *                 type: string
 *              password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 */
authRouter.post("/login", validateRequest(LoginDto), async (req, res, next) => {
  try {
    const data = await login(req.body);
    res.status(200).json({ success: true, data });
  } catch (err) {
    next(err);
  }
});

export default authRouter;
