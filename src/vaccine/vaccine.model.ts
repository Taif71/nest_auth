import { prop } from '@typegoose/typegoose';

export class Vaccine {
	@prop({ required: true })
	name: string;
	@prop({ required: true })
	id: number;
	@prop({ required: true })
    price: number;
    
}
