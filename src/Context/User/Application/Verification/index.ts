import Jwt from "../../Infrastructure/Jwt";
import verificationUser from "./decodationUser";

const jwt = new Jwt();
export default verificationUser(jwt);
