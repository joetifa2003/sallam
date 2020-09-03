import { classToPlain } from 'class-transformer';

export default class Base {
  public toPlainObj() {
    return classToPlain(this);
  }
}
