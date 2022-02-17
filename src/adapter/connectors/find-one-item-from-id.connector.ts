import { Decorators } from '../decorators/decorators';
import { PrismaConnector } from './prisma.connector';
import { FindOneItemFromIdProtocol } from 'src/core/protocols/find-one-item-from-id.protocol';
import { CreateItemModel } from 'src/core/models/create-item.model';

@Decorators.Inject()
export class FindOneItemFromIdConnector implements FindOneItemFromIdProtocol {
  constructor(private readonly prismaConnector: PrismaConnector) {}

  async call(id: string): Promise<CreateItemModel> {
    const founded = await this.prismaConnector.item.findUnique({
      where: {
        id,
      },
    });

    if (!founded) {
      throw new Error('Item not found');
    }

    return new CreateItemModel({
      id: founded.id,
      name: founded.name,
      price: Number(founded.price),
    });
  }
}
