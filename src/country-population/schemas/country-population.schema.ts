import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class CountryPopulation {
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  country: string;

  @Prop()
  year: number;

  @Prop()
  area: number;

  @Prop()
  totalPopulation: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const CountryPopulationSchema =
  SchemaFactory.createForClass(CountryPopulation);

export type CountryPopulationDocument = HydratedDocument<CountryPopulation>;
