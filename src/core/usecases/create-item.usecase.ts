import { Decorators } from '../../adapter/decorators/decorators';
import { CreateItemProtocol } from '../protocols/create-item.protocol';
import { CreateItemStrategy } from '../strategies/create-item.strategy';
import { CreateItemModel } from '../models/create-item.model';

@Decorators.Inject()
export class CreateItemUsecase implements CreateItemStrategy {
  constructor(private readonly createSystemUserProtocol: CreateItemProtocol) {}

  call(data: CreateItemModel): Promise<CreateItemModel> {
    return this.createSystemUserProtocol.call(data);
  }
}
