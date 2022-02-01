class ClientAddress {
  readonly value: string;
  constructor(value: string) {
    this.value = value;
  }
  static validate(address: string): ClientAddress {
    if (!address.match(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+[0-9]*/)) {
      const error = new Error();
      error.stack = "404";
      error.message = "Invalid address";
      throw error;
    }
    return new ClientAddress(address);
  }
  public toString(): string {
    return this.value;
  }
}
export default ClientAddress;
