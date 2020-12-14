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
exports.TestController = void 0;
const common_1 = require("@nestjs/common");
const test_dto_1 = require("./test.dto");
const test_service_1 = require("./test.service");
let TestController = class TestController {
    constructor(medicineService) {
        this.medicineService = medicineService;
    }
    ;
    async GetAllTests() {
        return await this.medicineService.findAllTests();
    }
    async CreateTest(medInfo) {
        return await this.medicineService.createTest(medInfo);
    }
    async UpdateTest(body) {
        return await this.medicineService.updateTest(body);
    }
};
__decorate([
    common_1.Get('/all-tests'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestController.prototype, "GetAllTests", null);
__decorate([
    common_1.Post('/create-med'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [test_dto_1.TestDTO]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "CreateTest", null);
__decorate([
    common_1.Post('/update'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "UpdateTest", null);
TestController = __decorate([
    common_1.Controller('medicine'),
    __metadata("design:paramtypes", [test_service_1.TestService])
], TestController);
exports.TestController = TestController;
