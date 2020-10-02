import {
    IsAlpha, IsEmail,
    IsNotEmpty,
    IsNumberString,
    IsOptional, IsString,
    MaxLength, MinLength,IsDate, IsBoolean
} from "class-validator";



export class GimnasioCreateDTO {
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    nombre: string



}