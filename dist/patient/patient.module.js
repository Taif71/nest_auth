"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const patient_model_1 = require("./patient.model");
const patient_service_1 = require("./patient.service");
const patient_controller_1 = require("./patient.controller");
const logger_middleware_1 = require("./logger.middleware");
let PatientModule = class PatientModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.LoggerMiddleware)
            .forRoutes('test');
    }
};
PatientModule = __decorate([
    common_1.Module({
        imports: [nestjs_typegoose_1.TypegooseModule.forFeature([patient_model_1.Patient])],
        controllers: [patient_controller_1.PatientController],
        providers: [patient_service_1.PatientService],
    })
], PatientModule);
exports.PatientModule = PatientModule;
