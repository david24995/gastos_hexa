import { CategoriaModel } from '../domain/categoria.model';
import { ResponseCategoriaDto } from './categoria.dto';

export interface CategoriaRepository {
  list(): Promise<ResponseCategoriaDto>;
  getOne(id: number): Promise<CategoriaModel>;
  create(categoria: CategoriaModel): Promise<CategoriaModel>;
  update(id: number, categoria: CategoriaModel): Promise<CategoriaModel>;
  delete(id: number): Promise<CategoriaModel>;
}
