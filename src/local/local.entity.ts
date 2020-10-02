import { GimnasioEntity } from "src/gimnasio/gimnasio.entity";
import { HorarioEntity } from "src/horario/horario.entity";
import {Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";



@Entity('local')
export class LocalEntity{
    @PrimaryGeneratedColumn({
        name: 'id_local', //numero de cedula del usuario + el mes en el q estamos 
        unsigned: true,
        comment: 'Identificador'
    })
    idLocal: number;

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
     
    @OneToMany(type => HorarioEntity, horario => horario.local) // note: we will create author property in the Photo class below
    horarios: HorarioEntity[];
    @ManyToOne(type => GimnasioEntity, gimnasio => gimnasio.locales)
    gimnasio: GimnasioEntity;
   
}