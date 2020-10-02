import {
    IsAlpha, IsEmail,
    IsNotEmpty,
    IsNumberString,
    IsOptional, IsString,
    MaxLength, MinLength,IsDate, IsBoolean, IsNumber
} from "class-validator";



export class LocalUpdateDTO {
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    direccion: string
    @IsNumber()
    aforo: number
    @IsString()
    telefono_local: string



}