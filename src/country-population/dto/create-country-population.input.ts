import { Field, InputType, Int } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateCountryPopulationInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  country: string;

  @Field(() => Int)
  @IsNumber()
  year: number;

  @Field(() => Int)
  @IsNumber()
  area: number;

  @Field(() => Int)
  @IsNumber()
  totalPopulation: number;
}
