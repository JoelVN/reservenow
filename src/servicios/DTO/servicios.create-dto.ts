import {
    IsAlpha, IsEmail,
    IsNotEmpty,
    IsNumberString,
    IsOptional, IsString,
    MaxLength, MinLength,IsDate, IsBoolean, maxLength
} from "class-validator";



export class ServiciosCreateDTO {
    @IsString()
    @MinLength(1)
    @MaxLength(30)
    horario_inicio: string

    @IsString()
    @MinLength(1)
    @MaxLength(30)
    horario_fin: string


    @IsString()
    @MinLength(1)
    @MaxLength(30)
    nombre_entrenador: string
    
    


}