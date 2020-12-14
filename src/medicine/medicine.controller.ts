import { Controller, Get, Post, Delete, Put, Body, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.gaurd';
import { MedicineDTO, IUpdateRequest } from './medicine.dto';
import { Medicine } from './medicine.model';
import { MedicineService } from './medicine.service';

@Controller('medicine')
export class MedicineController{

    constructor(private readonly medicineService: MedicineService) {};

    @UseGuards(LocalAuthGuard)
    @Get('/all-medicine')
    async GetAllMedicine(): Promise<Medicine[] | null>  {
        return await this.medicineService.findAllMedicine();
    }

    @Post('/create-med')
    async CreateMed(@Body() medInfo: MedicineDTO): Promise<Medicine>{
        return await this.medicineService.createMedicine(medInfo);
    }

    @Post('/update')
	async UpdatePatient(@Body() body: IUpdateRequest): Promise<Medicine> {
		return await this.medicineService.updateMed(body);
	}
}