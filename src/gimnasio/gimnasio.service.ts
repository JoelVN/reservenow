import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {FindManyOptions, Like, Repository} from "typeorm";
import { GimnasioEntity } from "./gimnasio.entity";

@Injectable()
export class GimnasioService {

    constructor(
        @InjectRepository(GimnasioEntity)
        private repositorio: Repository<GimnasioEntity>
    ) {
    }

    crearUno(nuevoGimnasio: GimnasioEntity) {
        return this.repositorio.save(nuevoGimnasio) // promesa
    }

    buscarTodos(textoDeConsulta?: string) {
        const consulta: FindManyOptions<GimnasioEntity> = {
            where: [
                {
                    id: Like(`%${textoDeConsulta}%`)
                },
                {
                    nombre: Like(`%${textoDeConsulta}%`)
                }
                
            ]
        }

        return this.repositorio.find(consulta) // promesa
    }
    buscarUno(id: number) {
        return this.repositorio.findOne(id) // promesa
    }

    editarUno(GimnasioEntity: GimnasioEntity) {
        return this.repositorio.save(GimnasioEntity);
    }

    eliminarUno(id: number) {
        return this.repositorio.delete(id);
    }
}