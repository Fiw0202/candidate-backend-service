import bcrypt from "bcrypt";
import { ReqCreateUserDto } from "./dto/request/user.request.dto";
import { UserRepository } from "./user.repository";

const userRepository = new UserRepository();

export const getAllUsers = async () => {
  try {
    const users = await userRepository.findAllUsers();
    return users;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const createUser = async (req: ReqCreateUserDto) => {
  try {
    const exitsUser = await userRepository.findUser(req);
    if (exitsUser) {
      return {
        status: 200,
        message: "Username already exists",
      };
    }
    const hashedPassword = await bcrypt.hash(req.password, 10);
    const newUser = await userRepository.createUser({
      ...req,
      password: hashedPassword,
    });
    return {
      user: newUser.firstName,
    };
  } catch (err) {
    console.log(err);
    return err;
  }
};
