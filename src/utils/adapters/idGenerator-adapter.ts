import { v4 as uuid } from 'uuid';
import { IdGeneratorAdapterInterface } from '../abstract/adapters/idGeneratorAdapter-interface';

export class IdGeneratorAdapter implements IdGeneratorAdapterInterface {
  public generateId(): string {
    return uuid();
  }
}
