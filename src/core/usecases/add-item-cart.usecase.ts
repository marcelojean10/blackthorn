import { Decorators } from '../../adapter/decorators/decorators';
import { AddItemCartProtocol } from '../protocols/add-item-cart.protocol';
import { AddItemCartStrategy } from '../strategies/add-item-cart.strategy';

@Decorators.Inject()
export class AddItemCartUsecase implements AddItemCartStrategy {
  constructor(private readonly addItemCartProtocol: AddItemCartProtocol) {}

  call(cartId: string, itemId: string): Promise<boolean> {
    return this.addItemCartProtocol.call(cartId, itemId);
  }
}
