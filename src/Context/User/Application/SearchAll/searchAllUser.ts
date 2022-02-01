import UserRepository from "../../Domain/UserRepository";
const searchAllUser = (userRepo: UserRepository) => async () => {
  const user = await userRepo.getAll();
  return { users: user };
};
export default searchAllUser;
