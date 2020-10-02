import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServiciosController } from "./servicios.controller";


import { ServiciosEntity } from "./servicios.entity";
import { ServiciosService } from "./servicios.service";

@Module({
    controllers: [
        ServiciosController

    ],
    imports: [
        TypeOrmModule
            .forFeature(
                [
                    ServiciosEntity
                ],
                'default' //nombre cadena de conexion
            )
    ],
    providers:[
        ServiciosService
    ],
})

export class MusculoModule {

}