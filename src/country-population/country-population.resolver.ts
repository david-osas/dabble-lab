import { CountryPopulation } from './schemas/country-population.schema';
import { CreateCountryPopulationInput } from './dto/create-country-population.input';
import { CountryPopulationService } from './country-population.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CountryPopulationResolver {
  constructor(
    private readonly countryPopulationService: CountryPopulationService,
  ) {}

  @Mutation(() => CountryPopulation)
  async createCountryPopulation(
    @Args('createInput') createInput: CreateCountryPopulationInput,
  ) {
    return this.countryPopulationService.create(createInput);
  }

  @Query(() => [CountryPopulation])
  async countryPopulations() {
    return;
  }
}
