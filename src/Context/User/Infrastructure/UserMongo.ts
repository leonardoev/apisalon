import UserRepository from "../Domain/UserRepository";
import { MongoClient, ObjectId } from "mongodb";
import User from "../Domain/User";
class UserMongo implements UserRepository {
  async getAll(): Promise<User[]> {
    const collection = await this.getCollection();
    const documents = collection.find({}).toArray();
    return documents as any;
  }

  async updateConfirmedUser(id: string, confirmed: boolean): Promise<void> {
    const collection = await this.getCollection();
    await collection.updateOne({ _id: id } as any, {
      $set: { confirmed: confirmed },
    });
  }
  async getById(id: string): Promise<User | null> {
    const collection = await this.getCollection();
    const document: any = collection.find({ id });
    return document ? User.fromPrimitives({ ...document }) : null;
  }
  public async getByEmail(email: string): Promise<User | null> {
    const collection = await this.getCollection();
    const document = await collection.findOne({
      email: email,
    });
    return document ? User.fromPrimitives({ ...document } as any) : null;
  }
  async save(user: User): Promise<void> {
    const collection = await this.getCollection();
    await collection.insertOne(user.toPrimitives() as any);
  }
  private async getCollection() {
    const url = "mongodb://localhost:27017";
    const client = await MongoClient.connect(url);
    const db = client.db("salonPattyDB");
    return db.collection("users");
  }
}
export default UserMongo;
