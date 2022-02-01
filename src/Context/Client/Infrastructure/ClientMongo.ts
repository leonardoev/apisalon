import { MongoClient } from "mongodb";
import Client from "../Domain/Client";
import ClientRepository from "../Domain/ClientRepository";

class ClientMongo implements ClientRepository {
  async getByPhoneNumber(phoneNumber: string): Promise<Client | null> {
    const collection = await this.getCollection();
    const document = await collection.findOne({
      phoneNumber: phoneNumber,
    });
    return document ? Client.fromPrimitives({ ...document } as any) : null;
  }
  async save(client: Client): Promise<void> {
    const collection = await this.getCollection();
    await collection.insertOne(client.toPrimitives() as any);
  }
  private async getCollection() {
    const url = "mongodb://localhost:27017";
    const client = await MongoClient.connect(url);
    const db = client.db("salonPattyDB");
    return db.collection("clients");
  }
}
export default ClientMongo;
