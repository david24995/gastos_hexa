import { Estado } from '../../shared/domain/estado.model';

export interface ResponseUsuarioDto {
  fullName: string;
  email: string;
  fecha_nacimiento: Date;
  estado: Estado;
}
