import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('horario')
export class HorarioEntity{
  @PrimaryGeneratedColumn({
    name: 'id',
    unsigned: true,
    comment: 'Identificador'
  })
  id: number;

  @Column({
    type: 'time',
    nullable: false,
    name: 'hora_inicio',
  })
  hora_inicio?: number;

  @Column({
    type: 'time',
    nullable: false,
    name: 'hora_final',
  })
  hora_final?: number;

  @Column({
    name: 'dia',
    type: 'date',
    nullable: false,

  })
  dia?: string;

}