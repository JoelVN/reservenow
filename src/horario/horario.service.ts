import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Like, Repository } from 'typeorm';
import { HorarioEntity } from './horario.entity';


@Injectable()
export class HorarioService {

  constructor(
    @InjectRepository(HorarioEntity)
    private repositorio: Repository<HorarioEntity>
  ) {
  }

  crearUno(nuevoUsuario: HorarioEntity) {
    return this.repositorio.save(nuevoUsuario) // promesa
  }

  buscarTodos(textoDeConsulta?: string) {
    const consulta: FindManyOptions<HorarioEntity> = {
      where: [
        {
          dia: Like(`%${textoDeConsulta}%`)
        },
        {
          hora_inicio: Like(`%${textoDeConsulta}%`)
        },
        {
          hora_final: Like(`%${textoDeConsulta}%`)
        },


        
      ]
    }

    return this.repositorio.find(consulta) // promesa
  }
  buscarUno(idHorario: number) {
    return this.repositorio.findOne(idHorario) // promesa
  }

  editarUno(horarioEditado: HorarioEntity) {
    return this.repositorio.save(horarioEditado);
  }

  eliminarUno(idHorario: number) {
    return this.repositorio.delete(idHorario);
  }
}