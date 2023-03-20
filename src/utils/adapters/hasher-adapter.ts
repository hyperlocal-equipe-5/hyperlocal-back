import { hashSync, compareSync } from 'bcrypt';
import { HasherAdapterInterface } from '../abstract/adapters/hasherAdapter-interface';

export class HasherAdapter implements HasherAdapterInterface {
  public hash(password: string, saltRounds: number): string {
    return hashSync(password, saltRounds);
  }

  public compare(password: string, hashedPassword: string): boolean {
    return compareSync(password, hashedPassword);
  }
}
