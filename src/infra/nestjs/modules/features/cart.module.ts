import { Module } from '@nestjs/common';
import { CartService } from 'src/adapter/services/cart.service';
import { CartController } from '../../http/rest/cart.controller';
import { AddItemCartFeatureModule } from './add-item-cart.module';
import { CreateCartFeatureModule } from './create-cart.module';
import { GetAllCartItemsFeatureModule } from './get-all-cart-items.module';
import { RemoveItemCartFeatureModule } from './remove-item-cart.module';

@Module({
  imports: [
    CreateCartFeatureModule,
    GetAllCartItemsFeatureModule,
    RemoveItemCartFeatureModule,
    AddItemCartFeatureModule,
  ],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
