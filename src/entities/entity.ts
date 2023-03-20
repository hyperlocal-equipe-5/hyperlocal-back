export class Entity {
  protected getDate(): string {
    const todayDate = new Date().toISOString().split('T')[0];

    return todayDate;
  }

  protected emailValidator(email: string): {
    result: boolean;
    message: string;
  } {
    const response = { result: true, message: '' };

    if (email.match(/\@|\./g) === null || email.match(/\@|\./g).length < 2) {
      response.result = false;
      response.message = 'Invalid email format.';
    }

    return response;
  }
}
