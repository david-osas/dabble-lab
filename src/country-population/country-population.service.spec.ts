import { CountryPopulation } from './schemas/country-population.schema';
import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { CountryPopulationService } from './country-population.service';
import {
  dummyCountryPopulation,
  dummyCreateCountryPopulationInput,
} from './constants.test';

describe('Country Population Service', () => {
  let countryPopulationService: CountryPopulationService;

  const createMock = jest.fn().mockResolvedValue(dummyCountryPopulation);
  const findOneAndUpdateMock = jest
    .fn()
    .mockImplementation(
      async ({ _id }: { _id: any }, updates: Partial<CountryPopulation>) => {
        if (_id !== dummyCountryPopulation._id) {
          return null;
        }
        return { ...dummyCountryPopulation, ...updates };
      },
    );
  const findOneMock = jest
    .fn()
    .mockImplementation(async ({ _id }: { _id: any }) => {
      if (_id !== dummyCountryPopulation._id) {
        return null;
      }
      return dummyCountryPopulation;
    });
  const findMock = jest.fn().mockResolvedValue([dummyCountryPopulation]);

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CountryPopulationService,
        {
          provide: getModelToken(CountryPopulation.name),
          useValue: {
            create: createMock,
            findOneAndUpdate: findOneAndUpdateMock,
            findOne: findOneMock,
            find: findMock,
          },
        },
      ],
    }).compile();
    countryPopulationService = module.get<CountryPopulationService>(
      CountryPopulationService,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create country population record', async () => {
    const countryPopulation = await countryPopulationService.create(
      dummyCreateCountryPopulationInput,
    );

    expect(countryPopulation).toEqual(dummyCountryPopulation);
  });

  it('should update country population record', async () => {
    const newYear = dummyCountryPopulation.year + 10;
    const countryPopulation = await countryPopulationService.update({
      id: dummyCountryPopulation._id,
      year: newYear,
    });

    expect(countryPopulation).toEqual({
      ...dummyCountryPopulation,
      year: newYear,
    });
  });

  it('should not update country population record with invalid id', async () => {
    const newYear = dummyCountryPopulation.year + 10;
    const countryPopulation = await countryPopulationService.update({
      id: 'invalid id',
      year: newYear,
    });

    expect(countryPopulation).toBeNull();
  });

  it('should find one country population record', async () => {
    const countryPopulation = await countryPopulationService.findOne({
      id: dummyCountryPopulation._id,
    });

    expect(countryPopulation).toEqual(dummyCountryPopulation);
  });

  it('should not find one country population record with wrong id', async () => {
    const countryPopulation = await countryPopulationService.findOne({
      id: 'invalid id',
    });

    expect(countryPopulation).toBeNull();
  });

  it('should find array of country population records', async () => {
    const records = await countryPopulationService.find({
      year: dummyCountryPopulation.year,
    });

    expect(records).toEqual([dummyCountryPopulation]);
  });
});
