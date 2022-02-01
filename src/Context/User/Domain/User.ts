import ClientId from "../../Client/Domain/ClientId";
import UserConfirmed from "./UserConfirmed";
import UserEmail from "./UserEmail";
import UserId from "./UserId";
import UserPassword from "./UserPassword";
class User {
  readonly id: UserId;
  readonly email: UserEmail;
  readonly password: UserPassword;
  readonly confirmed: UserConfirmed;
  readonly clientId: ClientId;
  constructor(
    id: UserId,
    email: UserEmail,
    password: UserPassword,
    confirmed: UserConfirmed,
    clientId: ClientId
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.confirmed = confirmed;
    this.clientId = clientId;
  }
  static fromPrimitives(plainData: {
    _id: string;
    email: string;
    password: string;
    confirmed: boolean;
    clientId: string;
  }): User {
    return new User(
      new UserId(plainData._id),
      new UserEmail(plainData.email),
      new UserPassword(plainData.password),
      new UserConfirmed(plainData.confirmed),
      new ClientId(plainData.clientId)
    );
  }
  public toPrimitives() {
    return {
      _id: this.id.toString(),
      email: this.email.toString(),
      password: this.password.toString(),
      confirmed: this.confirmed.toBoolean(),
      clientId: this.clientId.toString(),
    };
  }
}
export default User;
