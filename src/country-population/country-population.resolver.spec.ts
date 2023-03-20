import {
  dummyCountryPopulation,
  dummyCreateCountryPopulationInput,
} from './constants.test';
import { CountryPopulationService } from './country-population.service';
import { Test } from '@nestjs/testing';
import { CountryPopulationResolver } from './country-population.resolver';

describe('Country Population Resolver', () => {
  let countryPopulationResolver: CountryPopulationResolver;
  const createMock = jest.fn().mockResolvedValue(dummyCountryPopulation);
  const updateMock = jest.fn().mockResolvedValue(dummyCountryPopulation);
  const findOneMock = jest.fn().mockResolvedValue(dummyCountryPopulation);
  const findMock = jest.fn().mockResolvedValue([dummyCountryPopulation]);

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CountryPopulationResolver,
        {
          provide: CountryPopulationService,
          useValue: {
            create: createMock,
            update: updateMock,
            findOne: findOneMock,
            find: findMock,
          },
        },
      ],
    }).compile();

    countryPopulationResolver = module.get<CountryPopulationResolver>(
      CountryPopulationResolver,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create country population', async () => {
    const data = await countryPopulationResolver.createCountryPopulation(
      dummyCreateCountryPopulationInput,
    );

    expect(data).toEqual(dummyCountryPopulation);
    expect(createMock).toBeCalledTimes(1);
  });

  it('should update country population', async () => {
    const data = await countryPopulationResolver.updateCountryPopulation({
      id: dummyCountryPopulation._id,
      year: dummyCountryPopulation.year + 10,
    });

    expect(data).toEqual(dummyCountryPopulation);
    expect(updateMock).toBeCalledTimes(1);
  });

  it('should find one create country population', async () => {
    const data = await countryPopulationResolver.countryPopulation({
      id: dummyCountryPopulation._id,
    });

    expect(data).toEqual(dummyCountryPopulation);
    expect(findOneMock).toBeCalledTimes(1);
  });

  it('should find array of create country population data', async () => {
    const data = await countryPopulationResolver.countryPopulations({
      year: dummyCountryPopulation.year,
    });

    expect(data).toEqual([dummyCountryPopulation]);
    expect(findMock).toBeCalledTimes(1);
  });
});
