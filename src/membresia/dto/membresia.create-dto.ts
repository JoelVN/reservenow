import {
    IsAlpha, IsEmail,
    IsNotEmpty,
    IsNumberString,
    IsOptional, IsString,
    MaxLength, MinLength,IsDate, IsBoolean
} from "class-validator";



export class MembresiaCreateDTO {
    @IsString()
    @IsNotEmpty()
    inicia: Date

    @IsString()
    @IsNotEmpty()
    finaliza: Date
    @IsString()
    @IsNotEmpty()
    estado: Date


}