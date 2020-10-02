import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { MusculoController } from "./musculo.controller";
import { MusculoEntity } from "./musculo.entity";
import { MusculoService } from "./musculo.service";

@Module({
    controllers: [
        MusculoController

    ],
    imports: [
        TypeOrmModule
            .forFeature(
                [
                    MusculoEntity
                ],
                'default' //nombre cadena de conexion
            )
    ],
    providers:[
        MusculoService
    ],
})

export class MusculoModule {

}