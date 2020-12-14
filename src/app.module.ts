import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { PatientModule } from './patient/patient.module';
import { MedicineModule } from './medicine/medicine.module';  

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AuthService } from './auth/auth.service';


@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypegooseModule.forRoot(process.env.MONGODB_URL, {
			useCreateIndex: true,
			useFindAndModify: true,
			useUnifiedTopology: true,
			useNewUrlParser: true,
		}),
		PatientModule,
		MedicineModule,
		AuthModule,
		UsersModule
	],
		controllers: [AppController],
		providers:[],
		
})
export class AppModule {}
