import { UsuarioModel } from '../domain/usuario.model';
import { PasswordEncrypterRepository } from '../../shared/application/password.respository';
import { ResponseUsuarioDto } from './usuario.dto';
import { UsuarioRepository } from './usuario.repository';

export class UsuarioUseCase {
  constructor(
    private readonly usuarioRepository: UsuarioRepository,
    private readonly passwordEncrypter: PasswordEncrypterRepository
  ) {}

  async list(): Promise<ResponseUsuarioDto[]> {
    return this.usuarioRepository.list();
  }
  async getOne(id: number): Promise<ResponseUsuarioDto> {
    return this.usuarioRepository.getOne(id);
  }
  async create(usuario: UsuarioModel): Promise<ResponseUsuarioDto> {
    usuario.password = await this.passwordEncrypter.hash(usuario.password);

    return this.usuarioRepository.create(usuario);
  }
  async update(id: number, usuario: UsuarioModel): Promise<ResponseUsuarioDto> {
    return this.usuarioRepository.update(id, usuario);
  }
  async delete(id: number): Promise<ResponseUsuarioDto> {
    return this.usuarioRepository.delete(id);
  }
}
