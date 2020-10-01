import {TypeOrmModule} from "@nestjs/typeorm";
import {Module} from "@nestjs/common";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioService} from "./usuario.service";

@Module({
    controllers: [

    ],
    imports: [
        TypeOrmModule
            .forFeature(
                [
                    UsuarioEntity
                ],
                'default' //nombre cadena de conexion
            )
    ],
    providers:[
        UsuarioService
    ],
})

export class UsuarioModule {

}