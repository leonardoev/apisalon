import jwt from "jsonwebtoken";
import JwtRepository from "../Domain/JwtRepository";
class Jwt implements JwtRepository {
  sign(object: { user: string }, secret: string, expiresIn: string): string {
    const result = jwt.sign(object, secret, {
      expiresIn: expiresIn,
    });
    return result;
  }
  verify(token: string, secret: string): string {
    const id = jwt.verify(token, secret) as string;
    return id;
  }
}
export default Jwt;
