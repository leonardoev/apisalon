import User from "./User";

interface UserRepository {
  save(user: User): Promise<void>;
  getByEmail(email: string): Promise<User | null>;
  getById(id: string): Promise<User | null>;
  getAll(): Promise<Array<User>>;
  updateConfirmedUser(id: string, confirmed: boolean): Promise<void>;
}
export default UserRepository;
