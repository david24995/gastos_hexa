import { Usuario } from '@prisma/client';
import { ResponseUsuarioDto } from '../application/usuario.dto';
import { Estado } from '../../shared/domain/estado.model';

export function mappingUsuarioDto(data: Usuario): ResponseUsuarioDto;

export function mappingUsuarioDto(data: Usuario[]): ResponseUsuarioDto[];

export function mappingUsuarioDto(
  data: Usuario | Usuario[]
): ResponseUsuarioDto | ResponseUsuarioDto[] {
  const isArray = Array.isArray(data);

  if (isArray) {
    return data.map((user) => ({
      fullName: `${user.nombre} ${user.apellido}`,
      email: user.email,
      fecha_nacimiento: user.fecha_nacimiento,
      estado: user.estado as unknown as Estado,
    }));
  }

  return {
    fullName: `${data.nombre} ${data.apellido}`,
    email: data.email,
    fecha_nacimiento: data.fecha_nacimiento,
    estado: data.estado as unknown as Estado,
  };
}
