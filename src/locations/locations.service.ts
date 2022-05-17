import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddLocationDto } from './dto/addLocation.dto';
import { LocationEntity } from './location.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(LocationEntity)
    private readonly locationRepository: Repository<LocationEntity>,
  ) {}

  async addLocation(addLocationDto: AddLocationDto) {
    const location = await this.locationRepository.findOne({
      code: addLocationDto.code,
    });
    if (location) {
      throw new HttpException(
        'location allready exist!',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    const newLocation = new LocationEntity();
    Object.assign(newLocation, addLocationDto);
    return await this.locationRepository.save(newLocation);
  }

  async findByid(id: number) {
    const location = await this.locationRepository.findOne({ id });
    if (!location) {
      throw new HttpException(
        'there is no location with this id',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return location;
  }

  async getLocationsForInput() {
    return await this.locationRepository
      .createQueryBuilder()
      .select(['id AS id', 'code AS label'])
      .getRawMany();
  }

  async getLocations() {
    return await this.locationRepository.find({ select: ['code', 'id'] });
  }
}
