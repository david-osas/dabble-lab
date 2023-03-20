import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class CountryPopulation {
  @Prop()
  country: string;

  @Prop()
  year: number;

  @Prop()
  area: number;

  @Prop()
  totalPopulation: number;
}

export const CountryPopulationSchema =
  SchemaFactory.createForClass(CountryPopulation);

export type CountryPopulationDocument = HydratedDocument<CountryPopulation>;
