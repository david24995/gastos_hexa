import { UsuarioModel } from '../domain/usuario.model';
import { UsuarioRepository } from './usuario.repository';

export class UsuarioUseCase {
  constructor(private usuarioRepository: UsuarioRepository) {}

  async list(): Promise<UsuarioModel[]> {
    return this.usuarioRepository.list();
  }
  async getOne(id: number): Promise<UsuarioModel> {
    return this.usuarioRepository.getOne(id);
  }
  async create(usuario: UsuarioModel): Promise<UsuarioModel> {
    return this.usuarioRepository.create(usuario);
  }
  async update(id: number, usuario: UsuarioModel): Promise<UsuarioModel> {
    return this.usuarioRepository.update(id, usuario);
  }
  async delete(id: number): Promise<UsuarioModel> {
    return this.usuarioRepository.delete(id);
  }
}
