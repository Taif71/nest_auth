import { prop } from '@typegoose/typegoose';

export class Medicine {
	@prop({ required: true })
	medicine_name: string;
	@prop({ required: true })
	id: number;
	@prop({ required: true })
    description: string;
    @prop({ required: true })
	qty: number;
}
