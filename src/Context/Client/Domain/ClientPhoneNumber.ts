import ClientRepository from "./ClientRepository";

class ClientPhoneNumber {
  readonly value: string;
  constructor(value: string) {
    this.value = value;
  }
  static validate(phoneNumber: string): ClientPhoneNumber {
    if (!phoneNumber.match(/^9\d{8}/)) {
      const error = new Error();
      error.stack = "404";
      error.message = "Invalid phone number";
      throw error;
    }
    return new ClientPhoneNumber(phoneNumber);
  }
  public async avoidRepetition(clientRepo: ClientRepository) {
    const clientExists = await clientRepo.getByPhoneNumber(this.value);
    if (clientExists) {
      const error = new Error();
      error.stack = "409";
      error.message = "Phone number already exists";
      throw error;
    }
  }
}
export default ClientPhoneNumber;
