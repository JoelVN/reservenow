import {
    IsAlpha, IsEmail,
    IsNotEmpty,
    IsNumberString,
    IsOptional, IsString,
    MaxLength, MinLength,IsDate, IsBoolean
} from "class-validator";



export class MembresiaCreateDTO {
    @IsDate()
    @IsNotEmpty()
    inicia: Date

    @IsDate()
    @IsNotEmpty()
    finaliza: Date

    @IsNotEmpty()
    estado: Date


}