import Client from "../../../Client/Domain/Client";
import ClientAddress from "../../../Client/Domain/ClientAddress";
import ClientFirstName from "../../../Client/Domain/ClientFirstName";
import ClientId from "../../../Client/Domain/ClientId";
import ClientLastName from "../../../Client/Domain/ClientLastName";
import ClientPhoneNumber from "../../../Client/Domain/ClientPhoneNumber";
import ClientRepository from "../../../Client/Domain/ClientRepository";
import HasherRepository from "../../Domain/BcryptRepository";
import JwtRepository from "../../Domain/JwtRepository";
import NotifierRepository from "../../Domain/NotifierRepository";
import User from "../../Domain/User";
import UserConfirmed from "../../Domain/UserConfirmed";
import UserEmail from "../../Domain/UserEmail";
import UserId from "../../Domain/UserId";
import UserPassword from "../../Domain/UserPassword";
import UserRepository from "../../Domain/UserRepository";

const signUpUser =
  (
    clientRepo: ClientRepository,
    userRepo: UserRepository,
    notifierRepo: NotifierRepository,
    hasherRepo: HasherRepository,
    jwtRepo: JwtRepository
  ) =>
  async (c: Client, u: User) => {
    const clientId = ClientId.random();
    const client = new Client(
      clientId,
      ClientFirstName.validate(c.firstName.toString()),
      ClientLastName.validate(c.lastName.toString()),
      ClientPhoneNumber.validate(c.phoneNumber.toString()),
      ClientAddress.validate(c.address.toString())
    );
    const user = new User(
      UserId.random(),
      UserEmail.validate(u.email.toString()),
      UserPassword.validate(u.password.toString()),
      UserConfirmed.default(),
      clientId
    );
    await client.phoneNumber.avoidRepetition(clientRepo);
    await user.email.avoidRepetition(userRepo);
    await user.password.hashPassword(hasherRepo);
    await clientRepo.save(client);
    await userRepo.save(user);
    const token = jwtRepo.sign(
      { user: user.id.toString() },
      process.env.SECRET as string,
      "10m"
    );

    await notifierRepo.sendActivator(user.email.toString(), token);
    return { message: "Confirm your email" };
  };
export default signUpUser;
