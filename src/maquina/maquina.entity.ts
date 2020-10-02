import { LocalEntity } from "src/local/local.entity";
import { ServiciosEntity } from "src/servicios/servicios.entity";
import {Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";



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
    @OneToMany(type => ServiciosEntity, servicio => servicio.maquina) // note: we will create author property in the Photo class below
    servicios: ServiciosEntity[];
   

    
}