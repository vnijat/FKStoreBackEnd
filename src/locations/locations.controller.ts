import { Body, Controller, Post } from '@nestjs/common';
import { AddLocationDto } from './dto/addLocation.dto';
import { LocationsService } from './locations.service';

@Controller('location')
export class LocationsController {
  constructor(private readonly locationService: LocationsService) {}

  @Post()
  async addLocation(@Body('location') addLocationDto: AddLocationDto) {
    return await this.locationService.addLocation(addLocationDto);
  }
}
