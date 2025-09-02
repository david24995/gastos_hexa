import { Estado } from '../../generated/prisma';

export interface ResponseCategoriaDto {
  nombre: string;
  descripcion?: string;
  estado: Estado;
}

export function mappingCategoriaDto(data: any): ResponseCategoriaDto;

export function mappingCategoriaDto(data: any[]): ResponseCategoriaDto[];

export function mappingCategoriaDto(
  data: any | any[]
): ResponseCategoriaDto | ResponseCategoriaDto[] {
  const isArray = Array.isArray(data);

  if (isArray)
    return data.map((categoria) => ({
      nombre: categoria.nombre,
      descripcion: categoria.descripcion,
      estado: categoria.estado,
    }));

  return {
    nombre: data.nombre,
    descripcion: data.descripcion,
    estado: data.estado,
  };
}
