import { Decorators } from '../decorators/decorators';
import { PrismaConnector } from './prisma.connector';
import { GetAllItemsProtocol } from 'src/core/protocols/get-all-items.protocol';
import { Item } from '@prisma/client';

@Decorators.Inject()
export class GetAllItemsConnector implements GetAllItemsProtocol {
  constructor(private readonly prismaConnector: PrismaConnector) {}

  async call(): Promise<Item[]> {
    const founded = await this.prismaConnector.item.findMany({
      select: {
        id: true,
        name: true,
        price: true
      }
    });

    return founded;
  }
}
