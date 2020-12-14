import { IsEmail, IsString, IsNotEmpty, MinLength, IsNumber, MaxLength, Max } from 'class-validator';

export class MedicineDTO  {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(5)
    readonly id: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(30)
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    @MinLength(1)
    readonly qty: number;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;
}

export interface IUpdateRequest {
    medicineId: string,
    updatedValues: Record<string, unknown>
}