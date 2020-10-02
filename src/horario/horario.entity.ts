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
    type: 'varchar',
    nullable: false,
    name: 'hora_inicio',
  })
  hora_inicio?: number;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'hora_final',
  })
  hora_final?: number;

  @Column({
    name: 'dia',
    type: 'varchar',
    nullable: false,

  })
  dia?: string;

}