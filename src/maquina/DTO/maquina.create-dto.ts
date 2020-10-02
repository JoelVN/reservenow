import {
    IsAlpha, IsEmail,
    IsNotEmpty,
    IsNumberString,
    IsOptional, IsString,
    MaxLength, MinLength,IsDate, IsBoolean, maxLength
} from "class-validator";



export class MaquinaCreateDTO {
    @IsString()
    @MinLength(1)
    @MaxLength(30)
    nombre: string

    @IsString()
    @MinLength(1)
    @MaxLength(30)

    segmento_cuerpo: string

    


}