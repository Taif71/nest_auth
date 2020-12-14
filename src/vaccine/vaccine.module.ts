import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Vaccine } from './vaccine.model'; 
import { VaccineService } from './vaccine.service';
import { VaccineController } from './vaccine.controller';
import { LoggerMiddleware } from './logger.middleware';


@Module({
    imports: [TypegooseModule.forFeature([Vaccine])],
    controllers: [VaccineController],
    providers: [VaccineService]
})

export class VaccineModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
		  .apply(LoggerMiddleware)
		  .forRoutes('vaccine');
	  }
}