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
exports.MedicineController = void 0;
const common_1 = require("@nestjs/common");
const local_auth_gaurd_1 = require("../auth/local-auth.gaurd");
const medicine_dto_1 = require("./medicine.dto");
const medicine_service_1 = require("./medicine.service");
let MedicineController = class MedicineController {
    constructor(medicineService) {
        this.medicineService = medicineService;
    }
    ;
    async GetAllMedicine() {
        return await this.medicineService.findAllMedicine();
    }
    async CreateMed(medInfo) {
        return await this.medicineService.createMedicine(medInfo);
    }
    async UpdatePatient(body) {
        return await this.medicineService.updateMed(body);
    }
};
__decorate([
    common_1.UseGuards(local_auth_gaurd_1.LocalAuthGuard),
    common_1.Get('/all-medicine'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MedicineController.prototype, "GetAllMedicine", null);
__decorate([
    common_1.Post('/create-med'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [medicine_dto_1.MedicineDTO]),
    __metadata("design:returntype", Promise)
], MedicineController.prototype, "CreateMed", null);
__decorate([
    common_1.Post('/update'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MedicineController.prototype, "UpdatePatient", null);
MedicineController = __decorate([
    common_1.Controller('medicine'),
    __metadata("design:paramtypes", [medicine_service_1.MedicineService])
], MedicineController);
exports.MedicineController = MedicineController;
