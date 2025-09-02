import { PrismaClient } from '@prisma/client';
import { UsuarioRepository } from '../application/usuario.repository';
import { UsuarioModel } from '../domain/usuario.model';
import {
  mappingUsuarioDto,
  ResponseUsuarioDto,
} from '../application/usuario.dto';

const prisma = new PrismaClient();

export class UsuarioOperation implements UsuarioRepository {
  async list(): Promise<ResponseUsuarioDto> {
    const users = await prisma.usuario.findMany();

    const usersMapped = mappingUsuarioDto(users);

    return usersMapped;
  }
  async getOne(id: number): Promise<ResponseUsuarioDto> {
    const user = await prisma.usuario.findFirst({
      where: {
        id,
      },
    });

    const userMapped = mappingUsuarioDto(user);

    return userMapped;
  }
  async create(usuario: UsuarioModel): Promise<ResponseUsuarioDto> {
    const { nombre, apellido, email, fecha_nacimiento, password } = usuario;

    const newUser = await prisma.usuario.create({
      data: {
        nombre,
        apellido,
        email,
        fecha_nacimiento,
        password,
      },
    });

    const mappedUser = mappingUsuarioDto(newUser);

    return mappedUser;
  }
  async update(id: number, usuario: UsuarioModel): Promise<ResponseUsuarioDto> {
    const { nombre, apellido, email, fecha_nacimiento, password } = usuario;

    const userUpdated = await prisma.usuario.update({
      where: { id },
      data: {
        nombre,
        apellido,
        email,
        fecha_nacimiento,
        password,
      },
    });

    const userMapped = mappingUsuarioDto(userUpdated);

    return userMapped;
  }
  async delete(id: number): Promise<ResponseUsuarioDto> {
    const userDeleted = await prisma.usuario.delete({
      where: { id },
    });

    const userMapped = mappingUsuarioDto(userDeleted);

    return userMapped;
  }
}
