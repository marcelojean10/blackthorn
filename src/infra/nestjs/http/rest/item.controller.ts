import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Item } from '@prisma/client';
import { CreateItemModel } from 'src/core/models/create-item.model';
import { ItemService } from '../../../../adapter/services/item.service';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async get(): Promise<Item[]> {
    return this.itemService.get();
  }

  @Get('/:id')
  async getItem(@Param('id') id: string): Promise<CreateItemModel> {
    return this.itemService.getItem(id);
  }

  @Post()
  createItem(@Body('data') data: CreateItemModel) {
    return this.itemService.createItem(data);
  }
}
