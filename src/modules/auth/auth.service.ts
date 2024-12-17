import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { LoginDto } from "./dto/request/auth.request.dto";
import { UserRepository } from "../user/user.repository";
import { CustomError } from "../../utils/customError";

dotenv.config();

const userRepository = new UserRepository();

export const login = async (req: LoginDto) => {
  const user = await userRepository.findUser(req);

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(req.password, user.password);
  if (!isMatch) {
    throw new CustomError("Invalid username or password", 401);
  }
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET || "",
    { expiresIn: "8h" }
  );

  return { token, user: { id: user.id, email: user.email } };
};
