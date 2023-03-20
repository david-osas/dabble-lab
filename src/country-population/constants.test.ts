import { CreateCountryPopulationInput } from './dto/create-country-population.input';

export const dummyCountryPopulation = {
  _id: 'id',
  country: 'USA',
  year: 2023,
  area: 200000,
  totalPopulation: 13000000000,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const dummyCreateCountryPopulationInput: CreateCountryPopulationInput = {
  country: dummyCountryPopulation.country,
  year: dummyCountryPopulation.year,
  area: dummyCountryPopulation.area,
  totalPopulation: dummyCountryPopulation.totalPopulation,
};
