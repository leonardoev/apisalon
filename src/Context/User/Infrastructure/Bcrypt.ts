import bcrypt from "bcrypt";
import BcryptRepository from "../Domain/BcryptRepository";
class Bcrypt implements BcryptRepository {
  async compare(password: string, hashingPassword: string): Promise<boolean> {
    const result = await bcrypt.compare(password, hashingPassword);
    console.log(result);

    return result;
  }
  async hash(password: string): Promise<string> {
    const result = await bcrypt.hash(password, 10);
    return result;
  }
}
export default Bcrypt;
