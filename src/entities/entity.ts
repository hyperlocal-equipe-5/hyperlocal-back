export class Entity {
  protected getDate(): string {
    const todayDate = new Date().toISOString().split('T')[0];

    return todayDate;
  }
}
