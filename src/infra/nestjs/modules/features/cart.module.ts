import { Module } from '@nestjs/common';
import { CartService } from 'src/adapter/services/cart.service';
import { CartController } from '../../http/rest/cart.controller';
import { AddItemCartFeatureModule } from './add-item-cart.module';
import { CreateCartFeatureModule } from './create-cart.module';
import { GetAllCartItemsFeatureModule } from './get-all-cart-items.module';
import { GetCartByUserIdFeatureModule } from './get-cart-by-user-id.module';
import { RemoveItemCartFeatureModule } from './remove-item-cart.module';

@Module({
  imports: [
    CreateCartFeatureModule,
    GetAllCartItemsFeatureModule,
    RemoveItemCartFeatureModule,
    AddItemCartFeatureModule,
    GetCartByUserIdFeatureModule
  ],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
