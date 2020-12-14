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
exports.TestService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const test_model_1 = require("./test.model");
let TestService = class TestService {
    constructor(TestModel) {
        this.TestModel = TestModel;
    }
    async findAllTests() {
        return await this.TestModel.find();
    }
    async createTest(medicineData) {
        const createdTest = new this.TestModel(medicineData);
        return await createdTest.save();
    }
    async updateTest(body) {
        const doc = await this.TestModel.findOne({ _id: body.testId }).exec();
        for (const key in body.updatedValues) {
            doc[key] = body.updatedValues[key];
        }
        return await doc.save();
    }
};
TestService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(test_model_1.Test)),
    __metadata("design:paramtypes", [Object])
], TestService);
exports.TestService = TestService;
