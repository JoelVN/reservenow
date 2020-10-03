import {Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LocalEntity } from "./local.entity";


@Injectable()
export class LocalService {

    constructor(
        @InjectRepository(LocalEntity)
        private repositorio: Repository<LocalEntity>
    ) {
    }

  }  