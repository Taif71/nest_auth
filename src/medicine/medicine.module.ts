import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Medicine } from './medicine.model'; 
import { MedicineService } from './medicine.service';
import { MedicineController } from './medicine.controller';
import { LoggerMiddleware } from './logger.middleware';

@Module({
    imports: [TypegooseModule.forFeature([Medicine])],
    controllers: [MedicineController],
    providers: [MedicineService]
})

export class MedicineModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
		  .apply(LoggerMiddleware)
		  .forRoutes('test');
	  }
}