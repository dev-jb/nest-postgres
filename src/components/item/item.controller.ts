import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemDto } from './dto/item.dto';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private service: ItemService) {}

  @Get()
  public async getAll() {
    return await this.service.getAll();
  }

  @Post()
  public async create(@Body() dto: ItemDto) {
    return await this.service.create(dto);
  }
}
