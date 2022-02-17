import { Decorators } from '../decorators/decorators';
import { CreateItemModel } from '../../core/models/create-item.model';
import { CreateItemProtocol } from '../../core/protocols/create-item.protocol';
import { PrismaConnector } from './prisma.connector';

@Decorators.Inject()
export class CreateItemConnector implements CreateItemProtocol {
  constructor(private readonly prismaConnector: PrismaConnector) {}

  async call(data: CreateItemModel): Promise<CreateItemModel> {
    const item = await this.prismaConnector.item.create({
      data: {
        name: data.name,
        price: data.price,
      },
      select: {
        id: true,
        name: true,
        price: true,
      },
    });

    return new CreateItemModel({
      id: item.id,
      name: item.name,
      price: Number(item.price),
    });
  }
}
