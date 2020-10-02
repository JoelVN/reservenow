import { HorarioEntity } from "src/horario/horario.entity";
import {Column, Entity, Index, ManyToMany, PrimaryGeneratedColumn} from "typeorm";



@Entity('musculo')
export class MusculoEntity{
    @PrimaryGeneratedColumn({
        name: 'id_musculo', //numero de cedula del usuario + el mes en el q estamos 
        unsigned: true,
        comment: 'Identificador'
    })
    idMusculo: number;

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
    
    

    
}