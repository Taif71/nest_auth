"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicineService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const medicine_model_1 = require("./medicine.model");
let MedicineService = class MedicineService {
    constructor(MedicineModel) {
        this.MedicineModel = MedicineModel;
    }
    async findAllMedicine() {
        return await this.MedicineModel.find();
    }
    async createMedicine(medicineData) {
        const createdMed = new this.MedicineModel(medicineData);
        return await createdMed.save();
    }
    async updateMed(body) {
        const doc = await this.MedicineModel.findOne({ _id: body.medicineId }).exec();
        for (const key in body.updatedValues) {
            doc[key] = body.updatedValues[key];
        }
        return await doc.save();
    }
};
MedicineService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(medicine_model_1.Medicine)),
    __metadata("design:paramtypes", [Object])
], MedicineService);
exports.MedicineService = MedicineService;
