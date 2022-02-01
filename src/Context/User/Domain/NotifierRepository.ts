interface NotifierRepository {
  sendActivator(email: string, token: string): Promise<void>;
}
export default NotifierRepository;
