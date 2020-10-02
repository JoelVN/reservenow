import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";

@Entity('usuario')
export class UsuarioEntity{
    @PrimaryGeneratedColumn({
        name: 'id',
        unsigned: true,
        comment: 'Identificador'
    })
    idUsuario: number;

    @Index({
        unique: false
    })

    @Column({
        name:'nombre',
        type: 'varchar',
        length: '60',
        nullable: true
    })
    nombreUsuario?: string;

    @Column({
        name: 'apellido',
        type: 'varchar',
        nullable: true,
        length: '60'
    })
    apellidoUsuario?: string

    @Column({
        name: 'cedula',
        type: 'varchar',
        nullable: false,
        unique: true,
        length: '18'
    })
    cedula: string;

    @Column({
        name: 'correo',
        type: 'varchar',
        nullable: false,
    })
    correoUsuario: string
}