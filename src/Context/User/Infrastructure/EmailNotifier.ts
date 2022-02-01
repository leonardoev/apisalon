import NotifierRepository from "../Domain/NotifierRepository";
import nodemailer from "nodemailer";

class EmailNotifier implements NotifierRepository {
  async sendActivator(email: string, token: string): Promise<void> {
    const url = `http://localhost:8080/auth/confirmation/${token}`;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to Patty's Salon",
      text: `click the next link ${url}`,
    };
    await (await this.getMailer()).sendMail(mailOptions);
  }
  private async getMailer() {
    return nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
}
export default EmailNotifier;
