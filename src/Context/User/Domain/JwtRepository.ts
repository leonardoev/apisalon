interface JwtRepository {
  verify(token: string, secret: string): string;
  sign(object: { user: string }, secret: string, expiresIn: string): string;
}
export default JwtRepository;
