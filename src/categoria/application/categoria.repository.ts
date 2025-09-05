import { CategoriaModel } from '../domain/categoria.model';
import { ResponseCategoriaDto } from './categoria.dto';

export interface CategoriaRepository {
  list(): Promise<ResponseCategoriaDto[]>;
  getOne(id: number): Promise<ResponseCategoriaDto>;
  create(categoria: CategoriaModel): Promise<ResponseCategoriaDto>;
  update(id: number, categoria: CategoriaModel): Promise<ResponseCategoriaDto>;
  delete(id: number): Promise<ResponseCategoriaDto>;
}
