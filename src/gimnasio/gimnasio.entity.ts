import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";

@Index([
    'id',
    'inicia',
    'finaliza',
    'estado',

])

@Entity('membresia')
export class GimnasioEntity{
    @PrimaryGeneratedColumn({
        name: 'id', //numero de cedula del usuario + el mes en el q estamos 
        unsigned: true,
        comment: 'Identificador'
    })
    id: number;

    @Column({
        name:'nombre',
        type: 'string',
        nullable: false
    })
    nombre?: string;

    

    
}