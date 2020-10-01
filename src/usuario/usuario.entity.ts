import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";

@Index([
    'nombre',
    'apellido',
    'cedula'
])

@Entity('usuario')
export class UsuarioEntity{
    @PrimaryGeneratedColumn({
        name: 'id',
        unsigned: true,
        comment: 'Identificador'
    })
    id: number;

    @Column({
        name:'nombre',
        type: 'varchar',
        length: '60',
        nullable: true
    })
    nombre?: string;

    @Column({
        name: 'apellido',
        type: 'varchar',
        nullable: true,
        length: '60'
    })
    apellido?: string

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
    correo: string
}