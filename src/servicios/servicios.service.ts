import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {FindManyOptions, Like, Repository} from "typeorm";
import { ServiciosEntity } from "./servicios.entity";

@Injectable()
export class ServiciosService {
    constructor(
        @InjectRepository(ServiciosEntity)
        private repositorio: Repository<ServiciosEntity>
    ) {
    }

    crearUno(nuevoServicio: ServiciosEntity) {
        return this.repositorio.save(nuevoServicio) // promesa
    }

    buscarTodos(textoDeConsulta?: string) {
        const consulta: FindManyOptions<ServiciosEntity> = {
            where: [
                {
                    horarioInicio: Like(`%${textoDeConsulta}%`)
                },
                {
                    horarioFin: Like(`%${textoDeConsulta}%`)
                },
                {
                    nombreEntrenador: Like(`%${textoDeConsulta}%`)
                }
            ]
        }

        return this.repositorio.find(consulta) // promesa
    }
    buscarUno(
        where: any = {}
    ): Promise<ServiciosEntity>{
        try {
            return this.repositorio.findOne({ where: where });
        }
        catch{
            return undefined;
        }}

    editarUno(servicioEditado: ServiciosEntity) {
        return this.repositorio.save(servicioEditado);
    }

    eliminarUno(id: number) {
        return this.repositorio.delete(id);
    }
}