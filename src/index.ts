import { UsuarioUseCase } from './usuario/application/usuario.useCase';
import { UsuarioOperation } from './usuario/infrastructure/usuario.operation';

(async () => {
  await main();
})();

async function main() {
  const usuarioOperation = new UsuarioOperation();
  const userUseCase = new UsuarioUseCase(usuarioOperation);

  console.log(await userUseCase.list());
}
