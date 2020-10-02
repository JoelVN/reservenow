import {
  IsDate,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsNumberString,
  MaxLength,
  MinLength,
  IsString
} from 'class-validator';

export class HorarioCreateDto {
  @IsNotEmpty()
  @IsString()
  @IsMilitaryTime()
  hora_inicio: string

  @IsNotEmpty()
  @IsString()
  @IsMilitaryTime()
  hora_final: string

  @IsNotEmpty()
  @MaxLength(10)
  @MinLength(5)
  @IsString()
  dia: string

}