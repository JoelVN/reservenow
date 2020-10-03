import {
    IsAlpha, IsEmail,
    IsNotEmpty,
    IsNumberString,
    IsOptional, IsString,
    MaxLength, MinLength
} from "class-validator";



export class UsuarioUpdateDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    rolUsuario: string;

    @IsNotEmpty()
    @IsNumberString()
    @MinLength(10)
    @MaxLength(10)
    cedulaUsuario: string

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