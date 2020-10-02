import {
    IsAlpha, IsEmail,
    IsNotEmpty,
    IsNumberString,
    IsOptional, IsString,
    MaxLength, MinLength
} from "class-validator";



export class UsuarioUpdateDto {
    @IsNotEmpty()
    @IsNumberString()
    @MinLength(10)
    @MaxLength(10)
    cedula: string

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    nombreUsuario: string

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    apellidoUsuario: string


    @IsNotEmpty()
    @IsEmail()
    correo: string;

    @IsNotEmpty()
    password: string;


}