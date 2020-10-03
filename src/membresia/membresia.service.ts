import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {FindManyOptions, Like, Repository} from "typeorm";
import { MembresiaEntity } from "./membresia.entity";

@Injectable()
export class MembresiaService {

    constructor(
        @InjectRepository(MembresiaEntity)
        private repositorio: Repository<MembresiaEntity>
    ) {
    }

    crearUno(nuevoUsuario: MembresiaEntity) {
        return this.repositorio.save(nuevoUsuario) // promesa
    }

    buscarTodos(textoDeConsulta?: string) {
        const consulta: FindManyOptions<MembresiaEntity> = {
            where: [
                {
                    idMembresia: Like(`%${textoDeConsulta}%`)
                },
                {
                    inicia: Like(`%${textoDeConsulta}%`)
                },
                {
                    finaliza: Like(`%${textoDeConsulta}%`)
                }
            ]
        }

        return this.repositorio.find(consulta) // promesa
    }
    buscarUno(id: number) {
        return this.repositorio.findOne(id) // promesa
    }

    editarUno(membresiaEntity: MembresiaEntity) {
        return this.repositorio.save(membresiaEntity);
    }

    eliminarUno(id: number) {
        return this.repositorio.delete(id);
    }
}