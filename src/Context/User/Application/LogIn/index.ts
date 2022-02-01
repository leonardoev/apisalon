import Bcrypt from "../../Infrastructure/Bcrypt";
import Jwt from "../../Infrastructure/Jwt";
import UserMongo from "../../Infrastructure/UserMongo";
import loginUser from "./logInUser";

const userMongo = new UserMongo();
const bcrypt = new Bcrypt();
const jwt = new Jwt();
export default loginUser(userMongo, bcrypt, jwt);
