import { Injectable  } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import {IUpdateRequest, TestDTO } from './test.dto'; 
import { Test } from './test.model';



@Injectable()
export class TestService {
    constructor(@InjectModel(Test) private readonly TestModel: ReturnModelType<typeof Test>) {}

    async findAllTests(): Promise<Test[] | null>{
        return await this.TestModel.find();
    } 

    async createTest(medicineData: TestDTO): Promise<Test>{
        const createdTest = new this.TestModel(medicineData);
        return await createdTest.save();
    }

    async updateTest(body: IUpdateRequest): Promise<Test> {
        const doc = await this.TestModel.findOne({ _id: body.testId}).exec();

        for (const key in body.updatedValues) {
            doc[key] = body.updatedValues[key];
        }

        return await doc.save();
    }
}
