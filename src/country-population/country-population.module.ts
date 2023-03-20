import { CountryPopulationService } from './country-population.service';
import {
  CountryPopulation,
  CountryPopulationSchema,
} from './schemas/country-population.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CountryPopulationResolver } from './country-population.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CountryPopulation.name, schema: CountryPopulationSchema },
    ]),
  ],
  providers: [CountryPopulationService, CountryPopulationResolver],
})
export class CountryPopulationModule {}
