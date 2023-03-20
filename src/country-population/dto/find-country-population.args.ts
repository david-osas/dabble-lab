import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { CreateCountryPopulationInput } from './create-country-population.input';
import { ArgsType, Field, PartialType } from '@nestjs/graphql';

@ArgsType()
export class FindCountryPopulationArgs extends PartialType(
  CreateCountryPopulationInput,
  ArgsType,
) {
  @Field({ nullable: true })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  id?: string;
}
