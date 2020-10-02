import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {FindManyOptions, Like, Repository} from "typeorm";
import { MaquinaEntity } from "./maquina.entity";

@Injectable()
export class MaquinaService {

    constructor(
        @InjectRepository(MaquinaEntity)
        private repositorio: Repository<MaquinaEntity>
    ) {
    }

    crearUno(nuevaMaquina: MaquinaEntity) {
        return this.repositorio.save(nuevaMaquina) // promesa
    }

    buscarTodos(textoDeConsulta?: string) {
        const consulta: FindManyOptions<MaquinaEntity> = {
            where: [
                {
                    id: Like(`%${textoDeConsulta}%`)
                },
                {
                    nombre: Like(`%${textoDeConsulta}%`)
                },
                {
                    segmento_cuerpo: Like(`%${textoDeConsulta}%`)
                }
            ]
        }

        return this.repositorio.find(consulta) // promesa
    }
    buscarUno(id: number) {
        return this.repositorio.findOne(id) // promesa
    }

    editarUno(maquinaEntity: MaquinaEntity) {
        return this.repositorio.save(maquinaEntity);
    }

    eliminarUno(id: number) {
        return this.repositorio.delete(id);
    }
}