class ClientFirstName {
  readonly value: string;
  constructor(value: string) {
    this.value = value;
  }
  static validate(firstName: string): ClientFirstName {
    if (!firstName.match(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/)) {
      const error = new Error();
      error.stack = "404";
      error.message = "Invalid name";
      throw error;
    }
    return new ClientFirstName(firstName);
  }
  public toString(): string {
    return this.value;
  }
}
export default ClientFirstName;
