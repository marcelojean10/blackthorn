import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { CreateCartModel } from 'src/core/models/create-cart.model';
import { CartService } from '../../../../adapter/services/cart.service';
import { AddItemCartInputType } from './dtos/cart/inputs/add-item-cart.input-type';
import { CreateCartInputType } from './dtos/cart/inputs/create-cart.input-type';
import { RemoveItemCartInputType } from './dtos/cart/inputs/remove-item-cart.input-type copy';


@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOkResponse({ description: 'List all carts' })
  @Get()
  async get(): Promise<CreateCartModel[]> {
    return this.cartService.get();
  }

  @ApiOkResponse({ description: 'Cart created' })
  @ApiBody({ type: CreateCartInputType })
  @Post()
  createCart(@Body('data') data: CreateCartInputType) {
    return this.cartService.createCart(data);
  }

  @ApiOkResponse({ description: 'Item added cart' })
  @ApiBody({ type: AddItemCartInputType })
  @Post('add-item-cart')
  async addItemCart(
    @Body('data') data: AddItemCartInputType,
  ): Promise<boolean> {
    const result = this.cartService.addCartItem(data.id, data.itemId);
    return result;
  }

  @ApiOkResponse({ description: 'Item removed cart' })
  @ApiBody({ type: RemoveItemCartInputType })
  @Delete('remove-item-cart')
  removeCartItem(
    @Body('data') data: RemoveItemCartInputType,
  ): Promise<boolean> {
    const result = this.cartService.removeItemCart(data.id, data.itemId);
    return result;
  }

  @Get('/by-user/:userId')
  cartByUserId(@Param('userId') userId: string) {
    return this.cartService.getCartByUser(userId);
  }
}
