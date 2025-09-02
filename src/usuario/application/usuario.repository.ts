import { UsuarioModel } from '../domain/usuario.model';
import { ResponseUsuarioDto } from './usuario.dto';

export interface UsuarioRepository {
  list(): Promise<ResponseUsuarioDto>;
  getOne(id: number): Promise<ResponseUsuarioDto>;
  create(usuario: UsuarioModel): Promise<ResponseUsuarioDto>;
  update(id: number, usuario: UsuarioModel): Promise<ResponseUsuarioDto>;
  delete(id: number): Promise<ResponseUsuarioDto>;
}
