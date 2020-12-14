import { IsEmail, IsString, IsNotEmpty, MinLength, IsNumber, MaxLength, Max } from 'class-validator';

export class TestDTO  {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    readonly catagory: string;

    @IsNumber()
    @IsNotEmpty()
    // @MinLength(1)
    // @MaxLength(5)
    readonly id: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(30)
    readonly package_title: string;

    @IsNumber()
    @IsNotEmpty()
    @MinLength(1)
    readonly package_name: number;

    @IsNumber()
    @IsNotEmpty()
    readonly package_rate: number;
}

export interface IUpdateRequest {
    testId: string,
    updatedValues: Record<string, unknown>
}