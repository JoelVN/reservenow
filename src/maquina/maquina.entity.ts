import { LocalEntity } from "src/local/local.entity";
import {Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn} from "typeorm";



@Entity('maquina')
export class MaquinaEntity{
    @PrimaryGeneratedColumn({
        name: 'id_maquina', //numero de cedula del usuario + el mes en el q estamos 
        unsigned: true,
        comment: 'Identificador'
    })
    idMaquina: number;

    @Column({
        name:'nombre',
        type: 'varchar',
        nullable: false
    })
    nombre?: string;

    @Column({
        name:'segmento_cuerpo',
        type: 'int',
        nullable: false
    })
    segmento_cuerpo?: string

    @ManyToOne(type => LocalEntity, local => local.maquinas)
    local: LocalEntity;
   

    
}