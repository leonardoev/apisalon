import Client from "./Client";

interface ClientRepository {
  save(client: Client): Promise<void>;
  getByPhoneNumber(phoneNumber: string): Promise<Client | null>;
}
export default ClientRepository;
