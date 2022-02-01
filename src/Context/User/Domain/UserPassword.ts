import BcryptRepository from "./BcryptRepository";

class UserPassword {
  private value: string;
  constructor(value: string) {
    this.value = value;
  }
  static validate(password: string): UserPassword {
    if (password.length < 6) {
      const error = new Error();
      error.stack = "404";
      error.message = "Invalid password";
      throw error;
    }
    return new UserPassword(password);
  }
  public async hashPassword(bcryptRepo: BcryptRepository) {
    this.value = await bcryptRepo.hash(this.value);
  }
  public async verifyMatching(
    bcryptRepo: BcryptRepository,
    password: string,
    hashingPassword: string
  ) {
    const match = await bcryptRepo.compare(password, hashingPassword);
    if (!match) {
      const error = new Error();
      error.stack = "409";
      error.message = "Auth failed";
      throw error;
    }
  }
  public toString() {
    return this.value;
  }
}
export default UserPassword;
