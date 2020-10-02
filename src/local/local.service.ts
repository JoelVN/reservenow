import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {FindManyOptions, Like, Repository} from "typeorm";
import { LocalEntity } from "./local.entity";

@Injectable()
export class LocalService {
    constructor(
        @InjectRepository(LocalEntity)
        private repositorio: Repository<LocalEntity>
    ) {
    }

    crearUno(nuevoLocal: LocalEntity) {
        return this.repositorio.save(nuevoLocal) // promesa
    }

    buscarTodos(textoDeConsulta?: string) {
        const consulta: FindManyOptions<LocalEntity> = {
            where: [
                {
                    id_locales: Like(`%${textoDeConsulta}%`)
                },
                {
                    direccion: Like(`%${textoDeConsulta}%`)
                }
            ]
        }

        return this.repositorio.find(consulta) // promesa
    }
   
    buscarUno(
        where: any = {}
    ): Promise<LocalEntity>{
        try {
            return this.repositorio.findOne({ where: where });
        }
        catch{
            return undefined;
        }}
    editarUno(localEditado: LocalEntity) {
        return this.repositorio.save(localEditado);
    }

    eliminarUno(id: number) {
        return this.repositorio.delete(id);
    }
}