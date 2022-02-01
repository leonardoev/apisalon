import UserRepository from "./UserRepository";

class UserEmail {
  private value: string;
  constructor(value: string) {
    this.value = value;
  }
  static validate(email: string): UserEmail {
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      const error = new Error();
      error.stack = "404";
      error.message = "Invalid email";
      throw error;
    }
    return new UserEmail(email);
  }
  public async avoidRepetition(userRepo: UserRepository) {
    const userExists = await userRepo.getByEmail(this.value);
    if (userExists) {
      const error = new Error();
      error.stack = "409";
      error.message = "Email already exists";
      throw error;
    }
  }
  public toString() {
    return this.value;
  }
}
export default UserEmail;
