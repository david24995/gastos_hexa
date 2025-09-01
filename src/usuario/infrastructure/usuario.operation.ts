import { PrismaClient } from '../../generated/prisma';
import { Estado } from '../../shared/domain/estado.model';
import { UsuarioRepository } from '../application/usuario.repository';
import { UsuarioModel } from '../domain/usuario.model';

const prisma = new PrismaClient();

export class UsuarioOperation implements UsuarioRepository {
  async list(): Promise<UsuarioModel[]> {
    const users = await prisma.user.findMany();

    // return users.map((usr) => ({ id: usr.id,  }))
    return [];
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
