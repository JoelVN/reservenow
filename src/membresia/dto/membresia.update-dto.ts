import {
    IsAlpha, IsEmail,
    IsNotEmpty,
    IsNumberString,
    IsOptional, IsString,
    MaxLength, MinLength,IsDate, IsBoolean
} from "class-validator";



export class MembresiaUpdateDTO {
    @IsDate()
    inicia: Date

    @IsDate()
    finaliza: Date

    @IsBoolean()
    createDate: Date


}