import { Injectable } from '@nestjs/common';
import { CreateCartModel } from 'src/core/models/create-cart.model';
import { AddItemCartStrategy } from 'src/core/strategies/add-item-cart.strategy';
import { CreateCartStrategy } from 'src/core/strategies/create-cart.strategy';
import { GetAllCartItemsStrategy } from 'src/core/strategies/get-all-cart-items.strategy';
import { RemoveItemCartStrategy } from 'src/core/strategies/remove-item-cart.strategy';
import { CreateCartInputType } from 'src/infra/nestjs/http/rest/dtos/cart/inputs/create-cart.input-type';

@Injectable()
export class CartService {
  constructor(
    private readonly createCartStrategy: CreateCartStrategy,
    private readonly getAllCartItemsStrategy: GetAllCartItemsStrategy,
    private readonly removeItemCartStrategy: RemoveItemCartStrategy,
    private readonly addItemCartStrategy: AddItemCartStrategy,
  ) {}

  async get(): Promise<CreateCartModel[]> {
    const cartItems = await this.getAllCartItemsStrategy.call();
    return cartItems;
  }

  async createCart(cart: CreateCartInputType): Promise<CreateCartModel> {
    const cartCreated = await this.createCartStrategy.call(
      new CreateCartModel({
        discounts: cart.discounts,
        subtotal: cart.subtotal,
        taxes: cart.taxes,
        total: cart.total,
        itemPk: cart.itemPk,
      }),
    );

    return cartCreated;
  }

  async removeItemCart(id: string, itemId: string): Promise<boolean> {
    const deleteItem = await this.removeItemCartStrategy.call(id, itemId);
    return deleteItem;
  }

  async addCartItem(id: string, itemId: string): Promise<boolean> {
    const created = await this.addItemCartStrategy.call(id, itemId);
    return created;
  }
}
