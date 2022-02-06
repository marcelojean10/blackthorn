import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateCartModel } from 'src/core/models/create-cart.model';
import { CartService } from '../../../../adapter/services/cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  async get(): Promise<CreateCartModel[]> {
    return this.cartService.get();
  }

  @Post()
  createCart(@Body('data') data: any) {
    return this.cartService.createCart(data);
  }

  @Post('add-item-cart')
  async addItemCart(
    @Body('data') data: { id: string; itemId: string },
  ): Promise<boolean> {
    const result = this.cartService.addCartItem(data.id, data.itemId);
    return result;
  }

  @Delete('remove-item-cart')
  removeCartItem(
    @Body('data') data: { id: string; itemId: string },
  ): Promise<boolean> {
    const result = this.cartService.removeItemCart(data.id, data.itemId);
    return result;
  }
}
