import { Decorators } from '../decorators/decorators';
import { PrismaConnector } from './prisma.connector';
import { GetAllCartItemsProtocol } from 'src/core/protocols/get-all-cart-items.protocol';
import { CreateCartModel } from 'src/core/models/create-cart.model';

@Decorators.Inject()
export class GetAllCartItemsConnector implements GetAllCartItemsProtocol {
  constructor(private readonly prismaConnector: PrismaConnector) {}

  async call(): Promise<CreateCartModel[]> {
    const cartData = await this.prismaConnector.cart.findMany({
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
    cartData.map((cart) => {
       const itemData = []
       cart.cart_items.map((item) => itemData.push(item.item))
      
       cartItems.push({
          cart: {
            id: cart.id,
            subtotal: cart.subtotal,
            discounts: cart.discounts,
            taxes: cart.taxes,
            total: cart.total,
            items: itemData
          },
          user: cart.users
       })
    });

    return cartItems;
  }
}
