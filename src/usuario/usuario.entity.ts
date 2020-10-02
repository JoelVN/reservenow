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
        name:'nombre_usuario',
        type: 'varchar',
        nullable: false
    })
    nombreUsuario: string;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'apellido_usuario',
    })
    apellidoUsuario: string

    @Column({
        type: 'varchar',
        nullable: false,
        unique: true,
        name: 'cedula_usuario',

    })
    cedulaUsuario: string;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'rol_usuario',
        comment: 'Rol de usuario',
    })
    rolUsuario: string;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'email',
        unique: true,
    })
    correo: string

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'password',
    })
    password: string;
}