import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioModule} from "./usuario/usuario.module";
import {UsuarioEntity} from "./usuario/usuario.entity";
import { LocalEntity } from './local/local.entity';
import { MaquinaEntity } from './maquina/maquina.entity';
import { MembresiaEntity } from './membresia/membresia.entity';
import { MusculoEntity } from './musculo/musculo.entity';
import { GimnasioModule } from './gimnasio/gimnasio.module';
import { GimnasioEntity } from './gimnasio/gimnasio.entity';
import { LocalModule } from './local/local.module';
import { MaquinaModule } from './maquina/maquina.module';
import { MembresiaModule } from './membresia/membresia.module';
import { MusculoModule } from './musculo/musculo.module';
import { HorarioModule } from './horario/horario.module';
import { HorarioEntity } from './horario/horario.entity';
import { ServiciosEntity } from './servicios/servicios.entity';
import { ServiciosModule } from './servicios/servicios.module';

@Module({
  imports: [
      UsuarioModule,
      GimnasioModule,
      LocalModule,
      MaquinaModule,
      MembresiaModule,
      MusculoModule, 
      HorarioModule, 
      ServiciosModule ,   


      

      TypeOrmModule.forRoot({
      name: 'default', //nombre de la conexion
      type: 'mysql',  // mysql
      host: 'localhost', //ip
      port: 3306, // puerto
      username: 'root', //usuario
      password: '258456', //password
      database: 'reservenow',  //Base de datos
      entities: [ //Todas las entidades que se va a conectar
          UsuarioEntity,
          GimnasioEntity,
          LocalEntity,
          MaquinaEntity,
          MembresiaEntity,
          MusculoEntity,
          HorarioEntity,
          ServiciosEntity


      ],
      synchronize: true, //actualiza el esquema de la base de datos
      dropSchema: false, //Elimina los datos y esquema de bases de datos
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
