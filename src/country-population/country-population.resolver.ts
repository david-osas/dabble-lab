import { FindCountryPopulationArgs } from './dto/find-country-population.args';
import { UpdateCountryPopulationInput } from './dto/update-country-population.input';
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

  @Mutation(() => CountryPopulation, { nullable: true })
  async updateCountryPopulation(
    @Args('updateInput') updateInput: UpdateCountryPopulationInput,
  ) {
    return this.countryPopulationService.update(updateInput);
  }

  @Query(() => CountryPopulation, { nullable: true })
  async countryPopulation(@Args() conditionArgs: FindCountryPopulationArgs) {
    return this.countryPopulationService.findOne(conditionArgs);
  }

  @Query(() => [CountryPopulation])
  async countryPopulations() {
    return;
  }
}
