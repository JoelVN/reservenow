import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioModule} from "./usuario/usuario.module";
import {UsuarioEntity} from "./usuario/usuario.entity";
import { HorarioModule } from './horario/horario.module';
import { HorarioEntity } from './horario/horario.entity';

@Module({
  imports: [
      UsuarioModule,
      HorarioModule,
      TypeOrmModule.forRoot({
      name: 'default', //nombre de la conexion
      type: 'mysql',  // mysql
      host: 'localhost', //ip
      port: 3306, // puerto
      username: 'root', //usuario
      password: 'Alojomoracf77', //password
      database: 'reservenow',  //Base de datos
      entities: [ //Todas las entidades que se va a conectar
          UsuarioEntity,
          HorarioEntity
      ],
      synchronize: true, //actualiza el esquema de la base de datos
      dropSchema: false, //Elimina los datos y esquema de bases de datos
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
