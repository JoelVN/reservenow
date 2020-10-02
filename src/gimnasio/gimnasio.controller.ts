import { Controller } from "@nestjs/common";
import { GimnasioService } from "./gimnasio.service";

@Controller('gimnasio-rn')
export class GimnasioController {
    constructor(
        private readonly _gimnasioService: GimnasioService
    ) {
    }

    


}