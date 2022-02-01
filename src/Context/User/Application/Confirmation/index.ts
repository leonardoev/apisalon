import Jwt from "../../Infrastructure/Jwt";
import UserMongo from "../../Infrastructure/UserMongo";
import confirmationUser from "./confirmationUser";

const jwt = new Jwt();
const userMongo = new UserMongo();
export default confirmationUser(jwt, userMongo);
