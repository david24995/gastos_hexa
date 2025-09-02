// import { PrismaClient } from './generated/prisma';
// import { PrismaClient } from '@prisma/client';
import { UsuarioUseCase } from './usuario/application/usuario.useCase';
import { UsuarioOperation } from './usuario/infrastructure/usuario.operation';

// const prisma = new PrismaClient();

(async () => {
  await main();
})();

async function main() {
  const usuarioOperation = new UsuarioOperation();
  const userUseCase = new UsuarioUseCase(usuarioOperation);
  await userUseCase.list();
  // console.log(await userUseCase.list());
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: 'David2',
  //     lastName: 'Huamaccto Chate',
  //     email: 'david2@gmail.com',
  //     fecha_nacimiento: new Date('1995/09/24'),
  //     password: '123',
  //   },
  // });
  // console.log(newUser);
}
