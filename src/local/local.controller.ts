import { Controller } from "@nestjs/common";
import { LocalService } from "./local.service";

@Controller('local-rn')
export class LocalController {
    constructor(
        private readonly _localService: LocalService
    ) {
    }

    


}