import { Controller } from "@nestjs/common";
import { MembresiaService } from "./membresia.service";

@Controller('membresia-rn')
export class MembresiaController {
    constructor(
        private readonly _usuarioService: MembresiaService
    ) {
    }

    


}