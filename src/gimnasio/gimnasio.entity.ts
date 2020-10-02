import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";



@Entity('membresia')
export class GimnasioEntity{
    @PrimaryGeneratedColumn({
        name: 'id_membresia', //numero de cedula del usuario + el mes en el q estamos 
        unsigned: true,
        comment: 'Identificador'
    })
    idMembresia: number;

    @Column({
        name:'nombre',
        type: 'varchar',
        nullable: false
    })
    nombre?: string;

    

    
}