import UserMongo from "../../Infrastructure/UserMongo";
import searchAllUser from "./searchAllUser";

const userMongo = new UserMongo();
export default searchAllUser(userMongo);
