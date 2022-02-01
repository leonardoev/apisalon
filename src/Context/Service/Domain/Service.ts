import ServiceId from "./ServiceId";
import ServiceName from "./ServiceName";
import ServicePrice from "./ServicePrice";

class Service {
  readonly id: ServiceId;
  readonly name: ServiceName;
  readonly price: ServicePrice;
  constructor(id: ServiceId, name: ServiceName, price: ServicePrice) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
export default Service;
