import { createTransport } from 'nodemailer';
import { ApiEmailAccount } from 'src/domain/types/apiEmailAccount-type';
import { MailerAdapterInterface } from '../abstract/adapters/mailerAdapter-interface';

export class MailerAdapter implements MailerAdapterInterface {
  private apiAccountInfo: ApiEmailAccount;

  public setApiEmailAccountInfo(apiEmailAccountInfo: ApiEmailAccount): void {
    this.apiAccountInfo = apiEmailAccountInfo;
  }

  public async sendPasswordRecoveryEmail(
    userEmail: string,
    validationToken: string,
  ): Promise<string> {
    let message = '';
    const passwordRecoveryLink = process.env.FRONTEND_PASSWORD_RECOVERY_URL;

    const mailOptions = {
      from: this.apiAccountInfo.account.email,
      to: userEmail,
      subject: 'Password Reset Request',
      text: `Click the link to reset your password: ${passwordRecoveryLink}?token=${validationToken}`,
    };

    const transporter = createTransport({
      service: this.apiAccountInfo.service,
      auth: {
        user: this.apiAccountInfo.account.email,
        pass: this.apiAccountInfo.account.password,
      },
    });

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        message = error.message;
      } else {
        message = 'Email sent: ' + info.response;
      }
    });

    return message;
  }
}
