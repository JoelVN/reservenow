import {
  IsDate,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsNumberString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class HorarioCreateDto {
  @IsNotEmpty()
  @IsNumberString()
  @IsMilitaryTime()
  hora_inicio: string

  @IsNotEmpty()
  @IsNumberString()
  @IsMilitaryTime()
  hora_final: string

  @IsNotEmpty()
  @MaxLength(10)
  @MinLength(10)
  @IsDate()
  dia: string

}