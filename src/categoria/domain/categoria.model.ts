import { Estado } from '../../shared/domain/estado.model';

export interface CategoriaModel {
  id: number;
  nombre: string;
  descripcion?: string;
  estado: Estado;
}
