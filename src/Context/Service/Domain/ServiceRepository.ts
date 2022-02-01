import Service from "./Service";

interface ServiceRepository {
  save(service: Service): Promise<void>;
  getByName(email: string): Promise<Service | null>;
  getAll(): Promise<Array<Service>>;
  updatePrice(id: string, price: number): Promise<void>;
}
export default ServiceRepository;
