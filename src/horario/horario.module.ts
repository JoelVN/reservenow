import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorarioEntity } from './horario.entity';
import { HorarioController } from './horario.controller';
import { HorarioService } from './horario.service';


@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        HorarioEntity
      ],
      'default'
    )

  ],
  controllers: [

    HorarioController

  ],
  providers: [

    HorarioService
  ],
  exports: [
    HorarioService
  ]
})

export class HorarioModule {

}