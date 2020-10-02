import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";



@Entity('membresia')
export class MembresiaEntity{
    @PrimaryGeneratedColumn({
        name: 'id_membresia', //numero de cedula del usuario + el mes en el q estamos 
        unsigned: true,
        comment: 'Identificador'
    })
    idMembresia: number;

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