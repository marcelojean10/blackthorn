import { Decorators } from '../decorators/decorators';
import { PrismaConnector } from './prisma.connector';
import { AddItemCartProtocol } from 'src/core/protocols/add-item-cart.protocol';

@Decorators.Inject()
export class AddItemCartConnector implements AddItemCartProtocol {
  constructor(private readonly prismaConnector: PrismaConnector) {}

  async call(id: string, itemId: string): Promise<boolean> {
    const addedCartItem = await this.prismaConnector.cartItems.create({
      data: {
        cartPk: id,
        itemPk: itemId,
      },
    });

    if (! addedCartItem) {
      throw new Error('Not was possible add this item a cart')
    }

    return true;
  }
}
