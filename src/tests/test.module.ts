import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Test } from './test.model'; 
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { LoggerMiddleware } from './logger.middleware';
//import { LoggerMiddleware } from './logger.middleware';

@Module({
    imports: [TypegooseModule.forFeature([Test])],
    controllers: [TestController],
    providers: [TestService]
})

export class TestModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
		  .apply(LoggerMiddleware)
		  .forRoutes('test');
	  }
}