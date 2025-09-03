import { Categoria } from '@prisma/client';
import { ResponseCategoriaDto } from '../application/categoria.dto';
import { Estado } from '../../shared/domain/estado.model';

export function mappingCategoriaDto(data: Categoria): ResponseCategoriaDto;

export function mappingCategoriaDto(data: Categoria[]): ResponseCategoriaDto[];

export function mappingCategoriaDto(
  data: Categoria | Categoria[]
): ResponseCategoriaDto | ResponseCategoriaDto[] {
  const isArray = Array.isArray(data);

  if (isArray)
    return data.map((categoria) => ({
      nombre: categoria.nombre,
      descripcion: String(categoria.descripcion),
      estado: categoria.estado as unknown as Estado,
    }));

  return {
    nombre: data.nombre,
    descripcion: String(data.descripcion),
    estado: data.estado as unknown as Estado,
  };
}
