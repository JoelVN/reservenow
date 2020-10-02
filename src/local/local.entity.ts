import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";

@Index([
    'id',
    'direccion',
    'aforo',
    'telefono',

])

@Entity('local')
export class LocalEntity{
    @PrimaryGeneratedColumn({
        name: 'id', //numero de cedula del usuario + el mes en el q estamos 
        unsigned: true,
        comment: 'Identificador'
    })
    id: number;

    @Column({
        name:'direccion',
        type: 'string',
        nullable: false
    })
    direccion?: string;

    @Column({
        name:'aforo',
        type: 'number',
        nullable: false
    })
    aforo?: string

    @Column({
        name: 'telefono_local',
        type: 'string',
       
    })
    telefono_local: string;

    
}