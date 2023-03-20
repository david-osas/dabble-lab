import { UpdateCountryPopulationInput } from './dto/update-country-population.input';
import { CreateCountryPopulationInput } from './dto/create-country-population.input';
import {
  CountryPopulation,
  CountryPopulationDocument,
} from './schemas/country-population.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FindCountryPopulationArgs } from './dto/find-country-population.args';

@Injectable()
export class CountryPopulationService {
  constructor(
    @InjectModel(CountryPopulation.name)
    private readonly countryPopulationModel: Model<CountryPopulationDocument>,
  ) {}

  async create(createInput: CreateCountryPopulationInput) {
    const countryPopulation = new this.countryPopulationModel(createInput);
    return await countryPopulation.save();
  }

  async update(updateInput: UpdateCountryPopulationInput) {
    const { id, ...updates } = updateInput;
    return await this.countryPopulationModel.findOneAndUpdate(
      { _id: id },
      updates,
      {
        new: true,
      },
    );
  }

  async findOne(conditionArgs: FindCountryPopulationArgs) {
    const { id, ...tempArgs } = conditionArgs;
    const conditions = {
      ...tempArgs,
      ...(id && { _id: id }),
    };
    return await this.countryPopulationModel.findOne(conditions);
  }
}
