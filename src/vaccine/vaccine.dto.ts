import {IsString, IsNotEmpty, MinLength, IsNumber} from 'class-validator';

export class VaccineDTO  {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    // @MinLength(1)
    // @MaxLength(5)
    readonly id: number;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;
}

export interface IUpdateRequest {
    vaccineId: string,
    updatedValues: Record<string, unknown>
}