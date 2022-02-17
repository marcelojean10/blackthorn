import { Injectable } from '@nestjs/common';
import { Item } from '@prisma/client';
import { CreateItemModel } from 'src/core/models/create-item.model';
import { CreateItemStrategy } from 'src/core/strategies/create-item.strategy';
import { FindOneItemFromIdStrategy } from 'src/core/strategies/find-one-item-from-id.strategy';
import { GetAllItemsStrategy } from 'src/core/strategies/get-all-items.strategy';
import { CreateItemInputType } from 'src/infra/nestjs/http/rest/dtos/item/inputs/create-item.input-type';

@Injectable()
export class ItemService {
  constructor(
    private readonly createItemStrategy: CreateItemStrategy,
    private readonly findOneItemFromIdStrategy: FindOneItemFromIdStrategy,
    private readonly getAllItemsStrategy: GetAllItemsStrategy,
  ) {}

  async get(): Promise<Item[]> {
    const item = await this.getAllItemsStrategy.call();
    return item;
  }

  async getItem(id: string): Promise<CreateItemModel> {
    const item = await this.findOneItemFromIdStrategy.call(id);
    return item;
  }

  async createItem(item: CreateItemInputType): Promise<CreateItemModel> {
    const itemCreated = await this.createItemStrategy.call(
      new CreateItemModel({
        name: item.name,
        price: item.price,
      }),
    );

    return itemCreated;
  }
}
