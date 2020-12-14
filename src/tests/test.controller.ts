import { Controller, Get, Post, Delete, Put, Body } from '@nestjs/common';
import { TestDTO, IUpdateRequest } from './test.dto';
import { Test } from './test.model';
import { TestService } from './test.service';

@Controller('medicine')
export class TestController{

    constructor(private readonly medicineService: TestService) {};


    @Get('/all-tests')
    async GetAllTests(): Promise<Test[] | null>  {
        return await this.medicineService.findAllTests();
    }

    @Post('/create-med')
    async CreateTest(@Body() medInfo: TestDTO): Promise<Test>{
        return await this.medicineService.createTest(medInfo);
    }

    @Post('/update')
	async UpdateTest(@Body() body: IUpdateRequest): Promise<Test> {
		return await this.medicineService.updateTest(body);
	}
}