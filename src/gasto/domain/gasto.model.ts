import { Estado } from '../../shared/domain/estado.model';

export interface GastoModel {
  id: number;
  usuarioId: number;
  categoriaId: number;
  nombre: string;
  descripcion: string;
  monto: number;
  fecha: Date;
  estado: Estado;
}
