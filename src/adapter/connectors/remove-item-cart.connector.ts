import { Decorators } from '../decorators/decorators';
import { PrismaConnector } from './prisma.connector';
import { RemoveItemCartProtocol } from 'src/core/protocols/remove-item-cart.protocol';
import { Prisma } from '@prisma/client';
import { NotFoundException } from '@nestjs/common';

@Decorators.Inject()
export class RemoveItemCartConnector implements RemoveItemCartProtocol {
  constructor(private readonly prismaConnector: PrismaConnector) {}

  async call(id: string, itemId: string): Promise<boolean> {
    const deleteCartItem = await this.prismaConnector.$queryRaw(
      Prisma.sql`
      delete from public.cart_items ci
      where ci."cartPk" = ${id} and ci."itemPk" = ${itemId}`,
    );

    if (!deleteCartItem) {
      throw new Error('Not was possible delete this cart item.');
    }

    return true;
  }
}
