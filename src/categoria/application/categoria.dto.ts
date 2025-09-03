import { Estado } from '../../shared/domain/estado.model';

export interface ResponseCategoriaDto {
  nombre: string;
  descripcion?: string;
  estado: Estado;
}
