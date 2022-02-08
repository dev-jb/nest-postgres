import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
import { ItemEntity } from '../entity/item.entity';

export class ItemDto {
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  public static fromEntity(entity: ItemEntity) {
    const dto = new ItemDto();
    dto.name = entity.name;
    dto.description = entity.description;
    dto.price = entity.price;
    return dto;
  }

  public toEntity() {
    const entity = new ItemEntity();
    entity.id = this.id;
    entity.name = this.name;
    entity.description = this.description;
    entity.price = this.price;
    entity.createDateTime = new Date();
    entity.createdBy = 'admin';
    entity.lastChangedBy = 'admin';
    return entity;
  }
}
