import { Estado } from '../../shared/domain/estado.model';

export interface ResponseUsuarioDto {
  fullName: string;
  email: string;
  fecha_nacimiento: Date;
  estado: Estado;
}

export function mappingUsuarioDto(data: any): ResponseUsuarioDto;

export function mappingUsuarioDto(data: any[]): ResponseUsuarioDto[];

export function mappingUsuarioDto(
  data: any | any[]
): ResponseUsuarioDto | ResponseUsuarioDto[] {
  const isArray = Array.isArray(data);

  if (isArray) {
    return data.map((user) => ({
      fullName: `${user.nombre} ${user.apellido}`,
      email: user.email,
      fecha_nacimiento: user.fecha_nacimiento,
      estado: user.estado,
    }));
  }

  return {
    fullName: `${data.nombre} ${data.apellido}`,
    email: data.email,
    fecha_nacimiento: data.fecha_nacimiento,
    estado: data.estado,
  };
}
