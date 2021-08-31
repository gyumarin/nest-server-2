import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCatDto } from '../cats/dto/cats.dto';
import { CatsService } from './cats.service';
import { Cat } from '../cats/interface/cats.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('/DB')
  findDb(): any {
    return this.catsService.findDB();
  }

  // localhost/cats/name
  @Get(':name')
  searchName(@Param('name') args: any): Promise<Cat[]> {
    return this.catsService.searchName('name');
  }
}
