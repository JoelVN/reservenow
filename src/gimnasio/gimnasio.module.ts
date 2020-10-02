import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GimnasioController } from "./gimnasio.controller";
import { GimnasioEntity } from "./gimnasio.entity";
import { GimnasioService } from "./gimnasio.service";

@Module({
    controllers: [
        GimnasioController

    ],
    imports: [
        TypeOrmModule
            .forFeature(
                [
                    GimnasioEntity
                ],
                'default' //nombre cadena de conexion
            )
    ],
    providers:[
        GimnasioService
    ],
})

export class GimnasioModule {

}