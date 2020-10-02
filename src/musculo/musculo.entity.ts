import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";

@Index([
    'id',
    'nombre',
    'segmento_cuerpo',
    

])

@Entity('musculo')
export class MusculoEntity{
    @PrimaryGeneratedColumn({
        name: 'id', //numero de cedula del usuario + el mes en el q estamos 
        unsigned: true,
        comment: 'Identificador'
    })
    id: number;

    @Column({
        name:'nombre',
        type: 'string',
        nullable: false
    })
    nombre?: string;

    @Column({
        name:'segmento_cuerpo',
        type: 'number',
        nullable: false
    })
    segmento_cuerpo?: string

    

    
}