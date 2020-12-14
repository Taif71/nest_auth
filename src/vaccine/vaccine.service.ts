import { Injectable  } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import {IUpdateRequest, VaccineDTO } from './vaccine.dto'; 
import { Vaccine } from './vaccine.model';



@Injectable()
export class VaccineService {
    constructor(@InjectModel(Vaccine) private readonly VaccineModel: ReturnModelType<typeof Vaccine>) {}

    async findAllVaccine(): Promise<Vaccine[] | null>{
        return await this.VaccineModel.find();
    } 

    async createVaccine(vaccineData: VaccineDTO): Promise<Vaccine>{
        const createdVaccine = new this.VaccineModel(vaccineData);
        return await createdVaccine.save();
    }

    async updateVaccine(body: IUpdateRequest): Promise<Vaccine> {
        const doc = await this.VaccineModel.findOne({ _id: body.vaccineId}).exec();

        for (const key in body.updatedValues) {
            doc[key] = body.updatedValues[key];
        }

        return await doc.save();
    }
}
