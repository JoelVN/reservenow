import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MembresiaController } from "./membresia.controller";
import { MembresiaEntity } from "./membresia.entity";
import { MembresiaService } from "./membresia.service";

@Module({
    controllers: [
        MembresiaController

    ],
    imports: [
        TypeOrmModule
            .forFeature(
                [
                    MembresiaEntity
                ],
                'default' //nombre cadena de conexion
            )
    ],
    providers:[
        MembresiaService
    ],
})

export class MembresiaModule {

}