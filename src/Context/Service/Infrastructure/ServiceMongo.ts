import e from "express";
import Service from "../Domain/Service";
import ServiceRepository from "../Domain/ServiceRepository";

class ServiceMongo implements ServiceRepository {
  save(service: Service): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getByName(email: string): Promise<Service | null> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<Service[]> {
    throw new Error("Method not implemented.");
  }
  updatePrice(id: string, price: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
export default ServiceMongo;
