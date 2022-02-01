class UserConfirmed {
  private value: boolean;
  constructor(value: boolean) {
    this.value = value;
  }
  static default(): UserConfirmed {
    return new UserConfirmed(false);
  }
  public verifyConfirmation() {
    if (this.value == false) {
      const error = new Error();
      error.stack = "409";
      error.message = "You need to confirm email";
      throw error;
    }
  }
  static confirm(): UserConfirmed {
    return new UserConfirmed(true);
  }
  public toBoolean() {
    return this.value;
  }
}
export default UserConfirmed;
