interface BcryptRepository {
  hash(password: string): Promise<string>;
  compare(password: string, hashingPassword: string): Promise<boolean>;
}
export default BcryptRepository;
