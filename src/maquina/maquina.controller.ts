import { Controller } from "@nestjs/common";
import { MaquinaService } from "./maquina.service";

@Controller('maquina-rn')
export class MaquinaController {
    constructor(
        private readonly _maquinaService: MaquinaService
    ) {
    }

    


}