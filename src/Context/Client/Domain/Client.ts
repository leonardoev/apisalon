import ClientId from "./ClientId";
import ClientFirstName from "./ClientFirstName";
import ClientLastName from "./ClientLastName";
import ClientAddress from "./ClientAddress";
import ClientPhoneNumber from "./ClientPhoneNumber";

class Client {
  readonly id: ClientId;
  readonly firstName: ClientFirstName;
  readonly lastName: ClientLastName;
  readonly phoneNumber: ClientPhoneNumber;
  readonly address: ClientAddress;
  constructor(
    id: ClientId,
    firstName: ClientFirstName,
    lastName: ClientLastName,
    phoneNumber: ClientPhoneNumber,
    address: ClientAddress
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
  static fromPrimitives(plainData: {
    _id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
  }): Client {
    return new Client(
      new ClientId(plainData._id),
      new ClientFirstName(plainData.firstName),
      new ClientLastName(plainData.lastName),
      new ClientPhoneNumber(plainData.phoneNumber),
      new ClientAddress(plainData.address)
    );
  }
  public toPrimitives() {
    return {
      _id: this.id.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      phoneNumber: this.phoneNumber.value,
      address: this.address.value,
    };
  }
}
export default Client;
