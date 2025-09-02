import { hash, compare } from 'bcrypt';

import { PasswordEncrypterRepository } from '../application/password.respository';

export class BcryptEncrypter implements PasswordEncrypterRepository {
  hash(password: string): Promise<string> {
    return hash(password, 10);
  }
  compare(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
  }
}
