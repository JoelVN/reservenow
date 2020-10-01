import {
    IsAlpha,
    IsNotEmpty,
    IsNumberString,
    IsOptional,
    MaxLength
} from "class-validator";



export class UsuarioCreateDto {
    @IsNotEmpty()
    @IsNumberString()
    cedula: string

    @IsAlpha()
    @MaxLength(60)
    nombre?: string

    @IsAlpha()
    @MaxLength(60)
    apellido?: string


    @IsNotEmpty()
    @MaxLength(60)
    correo: string


}