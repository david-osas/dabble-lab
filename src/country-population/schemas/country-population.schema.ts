import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class CountryPopulation {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field()
  @Prop()
  country: string;

  @Field(() => Int)
  @Prop()
  year: number;

  @Field(() => Int)
  @Prop()
  area: number;

  @Field(() => Int)
  @Prop()
  totalPopulation: number;

  @Field()
  @Prop()
  createdAt: Date;

  @Field()
  @Prop()
  updatedAt: Date;
}

export const CountryPopulationSchema =
  SchemaFactory.createForClass(CountryPopulation);

export type CountryPopulationDocument = HydratedDocument<CountryPopulation>;
