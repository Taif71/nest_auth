import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Patient } from './patient.model';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';

import { LoggerMiddleware } from './logger.middleware';


//import {  } from './cats/cats.module';

@Module({
	imports: [TypegooseModule.forFeature([Patient])],
	controllers: [PatientController],
	providers: [PatientService],
})


export class PatientModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
		  .apply(LoggerMiddleware)
		  .forRoutes('test');
	  }
}
