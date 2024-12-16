import { AppDataSource } from "../../config/database.config";
import { User } from "./user.entity";
import { Repository } from "typeorm";

export class UserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  public async findAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async findUserById(id: number): Promise<User | null> {
    return await this.userRepository.findOneBy({ id });
  }

  public async createUser(userData: Partial<User>): Promise<User> {
    console.log(userData);
    const newUser = this.userRepository.create(userData);
    console.log("Creating new user:", userData);
    return await this.userRepository.save(newUser);
  }
}
