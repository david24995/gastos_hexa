import { Estado } from '../../shared/domain/estado.model';
import { UsuarioRepository } from '../application/usuario.repository';
import { UsuarioModel } from '../domain/usuario.model';

export class UsuarioOperation implements UsuarioRepository {
  list(): Promise<UsuarioModel[]> {
    return Promise.resolve([
      {
        id: 1,
        nombre: 'David',
        apellido: 'Huamaccto',
        email: 'davidhuamaccto24995@gmail.com',
        fecha_nacimiento: new Date('2025-09-24'),
        estado: Estado.ACTIVO,
      },
    ]);
  }
  getOne(id: number): Promise<UsuarioModel> {
    return Promise.resolve({
      id: 1,
      nombre: 'David',
      apellido: 'Huamaccto',
      email: 'davidhuamaccto24995@gmail.com',
      fecha_nacimiento: new Date('2025-09-24'),
      estado: Estado.ACTIVO,
    });
  }
  create(usuario: UsuarioModel): Promise<UsuarioModel> {
    return Promise.resolve({
      id: 1,
      nombre: 'David',
      apellido: 'Huamaccto',
      email: 'davidhuamaccto24995@gmail.com',
      fecha_nacimiento: new Date('2025-09-24'),
      estado: Estado.ACTIVO,
    });
  }
  update(id: number, usuario: UsuarioModel): Promise<UsuarioModel> {
    return Promise.resolve({
      id: 1,
      nombre: 'David',
      apellido: 'Huamaccto',
      email: 'davidhuamaccto24995@gmail.com',
      fecha_nacimiento: new Date('2025-09-24'),
      estado: Estado.ACTIVO,
    });
  }
  delete(id: number): Promise<UsuarioModel> {
    return Promise.resolve({
      id: 1,
      nombre: 'David',
      apellido: 'Huamaccto',
      email: 'davidhuamaccto24995@gmail.com',
      fecha_nacimiento: new Date('2025-09-24'),
      estado: Estado.ACTIVO,
    });
  }
}
