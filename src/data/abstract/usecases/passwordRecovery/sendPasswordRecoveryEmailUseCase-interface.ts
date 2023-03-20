export interface SendPasswordRecoveryEmailUseCaseInterface {
  execute(email: string): Promise<string>;
}
