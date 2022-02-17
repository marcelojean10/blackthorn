import { Decorators } from '../../adapter/decorators/decorators';
import { CreateItemModel } from '../models/create-item.model';
import { FindOneItemFromIdProtocol } from '../protocols/find-one-item-from-id.protocol';
import { FindOneItemFromIdStrategy } from '../strategies/find-one-item-from-id.strategy';

@Decorators.Inject()
export class FindOneItemFromIdUsecase implements FindOneItemFromIdStrategy {
  constructor(
    private readonly findOneItemFromIdProtocol: FindOneItemFromIdProtocol,
  ) {}

  call(id: string): Promise<CreateItemModel> {
    return this.findOneItemFromIdProtocol.call(id);
  }
}
