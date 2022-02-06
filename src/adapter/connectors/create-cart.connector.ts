import { Decorators } from '../decorators/decorators';
import { CreateCartModel } from '../../core/models/create-cart.model';
import { CreateCartProtocol } from '../../core/protocols/create-cart.protocol';
import { PrismaConnector } from './prisma.connector';

@Decorators.Inject()
export class CreateCartConnector implements CreateCartProtocol {
  constructor(private readonly prismaConnector: PrismaConnector) {}

  async call(data: CreateCartModel): Promise<CreateCartModel> {
    const cart = await this.prismaConnector.cart.create({
      data: {
        discounts: data.discounts,
        subtotal: data.subtotal,
        taxes: data.taxes,
        total: data.total,
      },
      select: {
        pk: true,
        discounts: true,
        subtotal: true,
        taxes: true,
        total: true,
      },
    });

    await this.prismaConnector.cartItems.create({
      data: {
        itemPk: data.itemPk,
        cartPk: cart.pk,
      },
    });

    return new CreateCartModel({
      pk: cart.pk,
      discounts: Number(cart.discounts),
      subtotal: Number(cart.subtotal),
      taxes: Number(cart.taxes),
      total: Number(cart.total),
    });
  }
}
