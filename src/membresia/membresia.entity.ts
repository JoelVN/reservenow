import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";

@Index([
    'id',
    'inicia',
    'finaliza',
    'estado',

])

@Entity('membresia')
export class MembresiaEntity{
    @PrimaryGeneratedColumn({
        name: 'id', //numero de cedula del usuario + el mes en el q estamos 
        unsigned: true,
        comment: 'Identificador'
    })
    id: number;

    @Column({
        name:'inicia',
        type: 'date',
        nullable: false
    })
    inicia?: Date;

    @Column({
        name:'finaliza',
        type: 'date',
        nullable: false
    })
    finaliza?: Date

    @Column({
        name: 'estado',
        type: 'boolean',
       
    })
    estado: boolean;

    
}