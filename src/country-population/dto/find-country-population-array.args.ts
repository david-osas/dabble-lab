import { CreateCountryPopulationInput } from './create-country-population.input';
import { ArgsType, PartialType } from '@nestjs/graphql';

@ArgsType()
export class FindCountryPopulationArrayArgs extends PartialType(
  CreateCountryPopulationInput,
  ArgsType,
) {}
