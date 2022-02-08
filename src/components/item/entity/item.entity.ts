import { BaseEntity } from 'src/@core/common/entity/base.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'item' })
export class ItemEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'decimal', default: 0.0 })
  price: number;
}
