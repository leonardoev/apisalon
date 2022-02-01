import { v4 } from "uuid";
class Uuid {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }
  static random(): Uuid {
    return new Uuid(v4());
  }
  public toString(): string {
    return this.value;
  }
}
export default Uuid;
