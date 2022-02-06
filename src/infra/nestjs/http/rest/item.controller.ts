import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { Item } from '@prisma/client';
import { CreateItemModel } from 'src/core/models/create-item.model';
import { ItemService } from '../../../../adapter/services/item.service';
import { CreateItemInputType } from './dtos/item/inputs/create-item.input-type';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @ApiOkResponse({ description: 'List all items' })
  @Get()
  async get(): Promise<Item[]> {
    return this.itemService.get();
  }

  @ApiOkResponse({ description: 'List a item :id' })
  @Get('/:id')
  async getItem(@Param('id') id: string): Promise<CreateItemModel> {
    return this.itemService.getItem(id);
  }

  @ApiOkResponse({ description: 'Item created' })
  @ApiBody({ type: CreateItemInputType })
  @Post()
  createItem(@Body('data') data: CreateItemModel) {
    return this.itemService.createItem(data);
  }
}
