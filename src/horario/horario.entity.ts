import { LocalEntity } from 'src/local/local.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('horario')
export class HorarioEntity{
  @PrimaryGeneratedColumn({
    name: 'id_horario',
    unsigned: true,
    comment: 'Identificador'
  })
  idHorario: number;

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
  @ManyToMany(type => UsuarioEntity, usuario => usuario.horariosEntity)
    usuariosEntity: UsuarioEntity[];
    
  @ManyToOne(type => LocalEntity, local => local.horarios)
    local: LocalEntity;
}