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
        user_id: data.userId,
      },
      select: {
        id: true,
        discounts: true,
        subtotal: true,
        taxes: true,
        total: true,
        user_id: true
      },
    });

    const cartItems = await this.prismaConnector.cartItems.create({
      data: {
        item_id: data.itemId,
        cart_id: cart.id,
      },
      include: {
        item: true
      }
    });

    console.log(cartItems)
    return new CreateCartModel({
      id: cart.id,
      discounts: Number(cart.discounts),
      subtotal: Number(cart.subtotal),
      taxes: Number(cart.taxes),
      total: Number(cart.total),
    });
  }
}
