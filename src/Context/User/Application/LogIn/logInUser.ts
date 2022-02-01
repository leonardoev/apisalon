import BcryptRepository from "../../Domain/BcryptRepository";
import JwtRepository from "../../Domain/JwtRepository";
import User from "../../Domain/User";
import UserRepository from "../../Domain/UserRepository";
const loginUser =
  (userRepo: UserRepository, bcryptRepo: BcryptRepository, jwtRepo: JwtRepository) =>
  async (body: User) => {
    const user = await userRepo.getByEmail(body.email.toString());
    if (!user) {
      const error = new Error();
      error.stack = "409";
      error.message = "Auth failed";
      throw error;
    }
    user.confirmed.verifyConfirmation();
    await user.password.verifyMatching(
      bcryptRepo,
      body.password.toString(),
      user.password.toString()
    );
    const token = jwtRepo.sign(
      { user: user.id.toString() },
      process.env.SECRET as string,
      "1h"
    );
    return {
      message: "Auth success",
      token: token,
    };
  };
export default loginUser;
