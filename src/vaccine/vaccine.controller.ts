import { Controller, Get, Post, Delete, Put, Body } from '@nestjs/common';
import { VaccineDTO, IUpdateRequest } from './vaccine.dto';
import { Vaccine } from './vaccine.model';
import { VaccineService } from './vaccine.service';

@Controller('vaccine')
export class VaccineController{

    constructor(private readonly vaccineService: VaccineService) {};


    @Get('/all-vaccines')
    async GetAllVaccines(): Promise<Vaccine[] | null>  {
        return await this.vaccineService.findAllVaccine();
    }

    @Post('/create-vac')
    async CreateVaccine(@Body() vaccineInfo: VaccineDTO): Promise<Vaccine>{
        return await this.vaccineService.createVaccine(vaccineInfo);
    }

    @Post('/update')
	async UpdateVaccine(@Body() body: IUpdateRequest): Promise<Vaccine> {
		return await this.vaccineService.updateVaccine(body);
	}
}