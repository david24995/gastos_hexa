import { CategoriaModel } from '../domain/categoria.model';
import { ResponseCategoriaDto } from './categoria.dto';
import { CategoriaRepository } from './categoria.repository';

export class CategoriaUseCase {
  constructor(private readonly categoriaRepository: CategoriaRepository) {}

  async list(): Promise<ResponseCategoriaDto[]> {
    return this.categoriaRepository.list();
  }
  async getOne(id: number): Promise<ResponseCategoriaDto> {
    return this.categoriaRepository.getOne(id);
  }
  async create(categoria: CategoriaModel): Promise<ResponseCategoriaDto> {
    return this.categoriaRepository.create(categoria);
  }
  async update(
    id: number,
    categoria: CategoriaModel
  ): Promise<ResponseCategoriaDto> {
    return this.categoriaRepository.update(id, categoria);
  }
  async delete(id: number): Promise<ResponseCategoriaDto> {
    return this.categoriaRepository.delete(id);
  }
}
