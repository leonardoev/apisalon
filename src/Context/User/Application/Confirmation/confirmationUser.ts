import JwtRepository from "../../Domain/JwtRepository";
import UserRepository from "../../Domain/UserRepository";
const confirmationUser =
  (jwtRepo: JwtRepository, userRepo: UserRepository) =>
  async (token: string) => {
    const { user: id } = jwtRepo.verify(
      token,
      process.env.SECRET as string
    ) as any;
    await userRepo.updateConfirmedUser(id, true);
    return { message: "email confirmed" };
  };
export default confirmationUser;
