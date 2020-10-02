import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LocalController } from "./local.controller";
import { LocalEntity } from "./local.entity";
import { LocalService } from "./local.service";


@Module({
    controllers: [
        LocalController

    ],
    imports: [
        TypeOrmModule
            .forFeature(
                [
                    LocalEntity
                ],
                'default' //nombre cadena de conexion
            )
    ],
    providers:[
        LocalService
    ],
})

export class LocalModule {

}