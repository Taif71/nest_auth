import { prop } from '@typegoose/typegoose';

export class Test {
	@prop({ required: true })
	category: string;
	@prop({ required: true })
	id: number;
	@prop({ required: true })
    package_title: string;
    @prop({ required: true })
    package_name: string;
    @prop({ required: true})
    package_rate: number
}
