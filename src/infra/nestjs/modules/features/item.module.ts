import { Module } from '@nestjs/common';
import { ItemService } from 'src/adapter/services/item.service';
import { ItemController } from '../../http/rest/item.controller';
import { CreateItemFeatureModule } from './create-item.module';
import { FindOneItemFromIdFeatureModule } from './find-one-item-from-id.module';
import { GetAllItemsFeatureModule } from './get-all-items.module';

@Module({
  imports: [
    CreateItemFeatureModule,
    FindOneItemFromIdFeatureModule,
    GetAllItemsFeatureModule,
  ],
  providers: [ItemService],
  controllers: [ItemController],
})
export class ItemModule {}
