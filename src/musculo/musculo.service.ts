import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {FindManyOptions, Like, Repository} from "typeorm";
import { MusculoEntity } from "./musculo.entity";

@Injectable()
export class MusculoService {
    constructor(
        @InjectRepository(MusculoEntity)
        private repositorio: Repository<MusculoEntity>
    ) {
    }

    crearUno(nuevoMusculo: MusculoEntity) {
        return this.repositorio.save(nuevoMusculo) // promesa
    }

    buscarTodos(textoDeConsulta?: string) {
        const consulta: FindManyOptions<MusculoEntity> = {
            where: [
                {
                    nombre: Like(`%${textoDeConsulta}%`)
                },
                {
                    apellido: Like(`%${textoDeConsulta}%`)
                },
                {
                    cedula: Like(`%${textoDeConsulta}%`)
                }
            ]
        }

        return this.repositorio.find(consulta) // promesa
    }
    buscarUno(
        where: any = {}
    ): Promise<MusculoEntity>{
        try {
            return this.repositorio.findOne({ where: where });
        }
        catch{
            return undefined;
        }}

    editarUno(musculoEditado: MusculoEntity) {
        return this.repositorio.save(musculoEditado);
    }

    eliminarUno(id: number) {
        return this.repositorio.delete(id);
    }
}