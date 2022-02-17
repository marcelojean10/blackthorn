import { Item } from '@prisma/client';
import { Decorators } from '../../adapter/decorators/decorators';
import { GetAllItemsProtocol } from '../protocols/get-all-items.protocol';
import { GetAllItemsStrategy } from '../strategies/get-all-items.strategy';

@Decorators.Inject()
export class GetAllItemsUsecase implements GetAllItemsStrategy {
  constructor(private readonly getAllItemsProtocol: GetAllItemsProtocol) {}

  call(): Promise<Item[]> {
    return this.getAllItemsProtocol.call();
  }
}
