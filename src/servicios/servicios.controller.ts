import { Controller } from "@nestjs/common";
import { ServiciosService } from "./servicios.service";

@Controller('membresia-rn')
export class ServiciosController {
    constructor(
        private readonly _serviciosService: ServiciosService
    ) {
    }

    


}