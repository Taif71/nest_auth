import { Injectable  } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import {IUpdateRequest, MedicineDTO } from './medicine.dto'; 
import { Medicine } from './medicine.model';



@Injectable()
export class MedicineService {
    constructor(@InjectModel(Medicine) private readonly MedicineModel: ReturnModelType<typeof Medicine>) {}

    async findAllMedicine(): Promise<Medicine[] | null>{
        return await this.MedicineModel.find();
    } 

    async createMedicine(medicineData: MedicineDTO): Promise<Medicine>{
        const createdMed = new this.MedicineModel(medicineData);
        return await createdMed.save();
    }

    async updateMed(body: IUpdateRequest): Promise<Medicine> {
        const doc = await this.MedicineModel.findOne({ _id: body.medicineId}).exec();

        for (const key in body.updatedValues) {
            doc[key] = body.updatedValues[key];
        }

        return await doc.save();
    }
}
