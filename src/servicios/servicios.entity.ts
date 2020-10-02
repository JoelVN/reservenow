import { HorarioEntity } from "src/horario/horario.entity";
import {Column, Entity, Index, ManyToMany, PrimaryGeneratedColumn} from "typeorm";



@Entity('servicios')
export class ServiciosEntity{
    @PrimaryGeneratedColumn({
        name: 'id_servicio', //numero de cedula del usuario + el mes en el q estamos 
        unsigned: true,
        comment: 'Identificador'
    })
    idServicio: number;

    @Column({
        name:'horario_inicio',
        type: 'varchar',
        nullable: false
    })
    horarioInicio?: string;

    @Column({
        name:'horario_fin',
        type: 'varchar',
        nullable: false
    })
    horarioFin?: string
    @Column({
        name:'nombre_entrenador',
        type: 'varchar',
        nullable: false
    })
    nombreEntrenador?: string


    
    

    
}