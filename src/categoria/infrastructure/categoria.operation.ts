import { PrismaClient } from '@prisma/client';
import { CategoriaRepository } from '../application/categoria.repository';
import { CategoriaModel } from '../domain/categoria.model';
import { ResponseCategoriaDto } from '../application/categoria.dto';
import { mappingCategoriaDto } from './categoria.mapping';

const prisma = new PrismaClient();

export class CategoriaOperation implements CategoriaRepository {
  async list(): Promise<ResponseCategoriaDto[]> {
    const categorias = await prisma.categoria.findMany();

    const mappedCategorias = mappingCategoriaDto(categorias);

    return mappedCategorias;
  }
  async getOne(id: number): Promise<CategoriaModel> {
    throw new Error('Method not implemented.');
  }
  async create(categoria: CategoriaModel): Promise<CategoriaModel> {
    throw new Error('Method not implemented.');
  }
  async update(id: number, categoria: CategoriaModel): Promise<CategoriaModel> {
    throw new Error('Method not implemented.');
  }
  async delete(id: number): Promise<CategoriaModel> {
    throw new Error('Method not implemented.');
  }
}
