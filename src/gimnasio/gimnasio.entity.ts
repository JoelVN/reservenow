import { MembresiaEntity } from "src/membresia/membresia.entity";
import {Column, Entity, Index, OneToMany, PrimaryGeneratedColumn} from "typeorm";



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
    @OneToMany(type => MembresiaEntity, membresia => membresia.gimnasio) // note: we will create author property in the Photo class below
    membresias: MembresiaEntity[];
    

    
}