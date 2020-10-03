import { GimnasioEntity } from "src/gimnasio/gimnasio.entity";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import {Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn} from "typeorm";



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
        type: 'varchar',
        nullable: false
    })
    inicia?: string;

    @Column({
        name:'finaliza',
        type: 'varchar',
        nullable: false
    })
    finaliza?: string

    @Column({
        name: 'estado',
        type: 'varchar',
       
    })
    estado: string;
    //@ManyToOne(type => UsuarioEntity, usuario => usuario.membresias)
  //  usuario: UsuarioEntity;
   // @ManyToOne(type => GimnasioEntity, gimnasio => gimnasio.membresias)
//gimnasio: GimnasioEntity;
    
}