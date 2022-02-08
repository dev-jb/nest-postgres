import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemDto } from './dto/item.dto';
import { ItemEntity } from './entity/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity) private readonly repo: Repository<ItemEntity>,
  ) {}

  async getAll() {
    return await this.repo
      .find()
      .then((items) => items.map((e) => ItemDto.fromEntity(e)));
  }

  async create(dto: ItemDto) {
    return this.repo
      .save(dto.toEntity())
      .then((entity) => ItemDto.fromEntity(entity));
  }
}
