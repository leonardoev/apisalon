class ClientLastName {
  readonly value: string;
  constructor(value: string) {
    this.value = value;
  }
  static validate(lastName: string): ClientLastName {
    if (!lastName.match(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm)) {
      const error = new Error();
      error.stack = "404";
      error.message = "Invalid surname";
      throw error;
    }
    return new ClientLastName(lastName);
  }
  public toString(): string {
    return this.value;
  }
}
export default ClientLastName;
