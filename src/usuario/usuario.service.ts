import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios: Usuario[] = [];
  private idCounter = 1;

  create(createUsuarioDto: CreateUsuarioDto) {

    const usuario: Usuario = {
      id: this.idCounter++,
      ...createUsuarioDto,
    };
    this.usuarios.push(usuario);
    return usuario;
  }

  findAll() {
    return `Retorna todos os usuarios`;
  }

  findOne(id: number) {
    return `Retorna um #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `Atualiza um #${id} usuario`;
  }

  remove(id: number) {
    return `Remove um #${id} usuario`;
  }
}
