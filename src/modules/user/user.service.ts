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
    const newUser = await userRepository.createUser(req);
    return {
      user: newUser.firstName,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};
