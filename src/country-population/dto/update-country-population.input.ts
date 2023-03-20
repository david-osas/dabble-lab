import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateCountryPopulationInput } from './create-country-population.input';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateCountryPopulationInput extends PartialType(
  CreateCountryPopulationInput,
) {
  @Field()
  @IsNotEmpty()
  @IsString()
  id: string;
}
