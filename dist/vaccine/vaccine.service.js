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
exports.VaccineService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const vaccine_model_1 = require("./vaccine.model");
let VaccineService = class VaccineService {
    constructor(VaccineModel) {
        this.VaccineModel = VaccineModel;
    }
    async findAllVaccine() {
        return await this.VaccineModel.find();
    }
    async createVaccine(vaccineData) {
        const createdVaccine = new this.VaccineModel(vaccineData);
        return await createdVaccine.save();
    }
    async updateVaccine(body) {
        const doc = await this.VaccineModel.findOne({ _id: body.vaccineId }).exec();
        for (const key in body.updatedValues) {
            doc[key] = body.updatedValues[key];
        }
        return await doc.save();
    }
};
VaccineService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(vaccine_model_1.Vaccine)),
    __metadata("design:paramtypes", [Object])
], VaccineService);
exports.VaccineService = VaccineService;
