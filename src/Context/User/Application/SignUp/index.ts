import EmailNotifier from "../../Infrastructure/EmailNotifier";
import UserMongo from "../../Infrastructure/UserMongo";
import signUpUser from "./signUpUser";
import Bcrypt from "../../Infrastructure/Bcrypt";
import Jwt from "../../Infrastructure/Jwt";
import ClientMongo from "../../../Client/Infrastructure/ClientMongo";

const clientMongo = new ClientMongo();
const userMongo = new UserMongo();
const emailNotifier = new EmailNotifier();
const bcrypt = new Bcrypt();
const jwt = new Jwt();
export default signUpUser(clientMongo, userMongo, emailNotifier, bcrypt, jwt);
