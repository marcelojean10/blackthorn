import { Decorators } from '../decorators/decorators';
import { PrismaConnector } from './prisma.connector';
import { GetCartByUserIdProtocol } from '../../core/protocols/get-cart-by-user-id.protocol'

@Decorators.Inject()
export class GetCartByUserIdConnector implements GetCartByUserIdProtocol {
  constructor(private readonly prismaConnector: PrismaConnector) {}

  async call(userId: string): Promise<any> {
    const cartData = await this.prismaConnector.cart.findFirst({
      where: {
        user_id: userId
      },
      include: {
       cart_items: {
         select: {
          item: true
         },
       },
       users: true
      }
    })

    const cartItems = [];  
    const items = [];
    cartData.cart_items.map((item) => items.push(item.item))
    cartItems.push({
      cart: {
        id: cartData.id,
        subtotal: cartData.subtotal,
        discounts: cartData.discounts,
        taxes: cartData.taxes,
        total: cartData.total,
        items
      },
      user: cartData.users
    });

    return cartItems;
  }
}