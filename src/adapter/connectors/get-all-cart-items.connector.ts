import { Decorators } from '../decorators/decorators';
import { PrismaConnector } from './prisma.connector';
import { GetAllCartItemsProtocol } from 'src/core/protocols/get-all-cart-items.protocol';
import { CreateCartModel } from 'src/core/models/create-cart.model';
import { Prisma } from '@prisma/client';
import { CreateItemModel } from 'src/core/models/create-item.model';
import { NotFoundException } from '@nestjs/common';

@Decorators.Inject()
export class GetAllCartItemsConnector implements GetAllCartItemsProtocol {
  constructor(private readonly prismaConnector: PrismaConnector) {}

  async call(): Promise<CreateCartModel[]> {
    const founded = await this.prismaConnector.$queryRaw(
      Prisma.sql`
      select * from public.cart as c
        inner join public.cart_items ci on ci."cartPk" = c.pk
        inner join public.item i on ci."itemPk" = i.pk ;`,
    );

    if (!founded || !Array.isArray(founded)) {
      throw new NotFoundException();
    }

    const cartItems = [];
    founded.forEach((cart) => {
      cartItems.push(
        new CreateCartModel({
          pk: cart.cartPk,
          discounts: cart.discounts,
          subtotal: cart.subtotal,
          taxes: cart.taxes,
          total: cart.total,
          item: new CreateItemModel({
            pk: cart.itemPk,
            name: cart.name,
            price: cart.price,
          }),
        }),
      );
    });

    return cartItems;
  }
}
