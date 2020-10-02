import { Controller } from "@nestjs/common";
import { MusculoService } from "./musculo.service";

@Controller('musculo-rn')
export class MusculoController {
    constructor(
        private readonly _musculoService: MusculoService
    ) {
    }

    


}