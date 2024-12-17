import { AppDataSource } from "../../config/database.config";
import { ReqFindUserDto } from "./dto/request/user.request.dto";
import { IWhereFindUser } from "./interface/user.interface";
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

  public async findUser(req: ReqFindUserDto): Promise<User | null> {
    const whereConditions: IWhereFindUser = {};
    if (req?.id) whereConditions.id = req.id;
    if (req?.userName) whereConditions.userName = req.userName;

    console.log(whereConditions);

    const user = await this.userRepository.findOne({
      where: whereConditions,
    });
    return user;
  }

  public async createUser(userData: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(userData);
    return await this.userRepository.save(newUser);
  }
}
