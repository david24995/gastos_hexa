import { UsuarioModel } from '../domain/usuario.model';

export interface UsuarioRepository {
  list(): Promise<UsuarioModel[]>;
  getOne(id: number): Promise<UsuarioModel>;
  create(usuario: UsuarioModel): Promise<UsuarioModel>;
  update(id: number, usuario: UsuarioModel): Promise<UsuarioModel>;
  delete(id: number): Promise<UsuarioModel>;
}
