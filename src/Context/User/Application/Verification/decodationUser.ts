import JwtRepository from "../../Domain/JwtRepository";
const verificationUser = (jwtRepo: JwtRepository) =>(token: string) => {
  const decoded = jwtRepo.verify(token, process.env.SECRET as string);
  return decoded;
};
export default verificationUser;
