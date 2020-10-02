import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MaquinaController } from "./maquina.controller";
import { MaquinaEntity } from "./maquina.entity";
import { MaquinaService } from "./maquina.service";


@Module({
    controllers: [
        MaquinaController

    ],
    imports: [
        TypeOrmModule
            .forFeature(
                [
                    MaquinaEntity
                ],
                'default' //nombre cadena de conexion
            )
    ],
    providers:[
        MaquinaService
    ],
})

export class MaquinaModule {

}