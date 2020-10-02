import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";

@Index([
    'id',
    'direccion',
    'aforo',
    'telefono_local',

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
        type: 'varchar',
        nullable: false
    })
    direccion?: string;

    @Column({
        name:'aforo',
        type: 'int',
        nullable: false
    })
    aforo?: string

    @Column({
        name: 'telefono_local',
        type: 'varchar',
       
    })
    telefono_local: string;

    
}