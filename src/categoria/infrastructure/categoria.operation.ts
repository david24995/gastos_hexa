import { Categoria, Prisma, PrismaClient } from '@prisma/client';
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
  async getOne(id: number): Promise<ResponseCategoriaDto> {
    const categoria = await prisma.categoria.findFirst({
      where: { id },
    });

    const categoriaMapped = mappingCategoriaDto(categoria as Categoria);

    return categoriaMapped;
  }
  async create(categoria: CategoriaModel): Promise<ResponseCategoriaDto> {
    const inputCategoria: Prisma.CategoriaCreateInput = {
      nombre: categoria.nombre,
      descripcion: String(categoria.descripcion),
    };

    const categoriaCreated = await prisma.categoria.create({
      data: inputCategoria,
    });

    const categoriaMapped = mappingCategoriaDto(categoriaCreated);

    return categoriaMapped;
  }
  async update(
    id: number,
    categoria: CategoriaModel
  ): Promise<ResponseCategoriaDto> {
    const inputCategoria: Prisma.CategoriaUpdateInput = {
      nombre: categoria.nombre,
      descripcion: String(categoria.descripcion),
    };

    const categoriaUpdated = await prisma.categoria.update({
      where: { id },
      data: inputCategoria,
    });

    const categoriaMapped = mappingCategoriaDto(categoriaUpdated);

    return categoriaMapped;
  }
  async delete(id: number): Promise<ResponseCategoriaDto> {
    const categoriaDeleted = await prisma.categoria.delete({ where: { id } });

    const categoriaMapped = mappingCategoriaDto(categoriaDeleted);

    return categoriaMapped;
  }
}
