import { ApiEmailAccount } from 'src/domain/types/apiEmailAccount-type';

export interface MailerAdapterInterface {
  setApiEmailAccountInfo(apiEmailAccountInfo: ApiEmailAccount): void;
  sendPasswordRecoveryEmail(
    userEmail: string,
    validationToken: string,
  ): Promise<string>;
}
