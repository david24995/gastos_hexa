import { Estado } from '../../shared/domain/estado.model';

export interface UsuarioModel {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  fecha_nacimiento: Date;
  estado: Estado;
}
