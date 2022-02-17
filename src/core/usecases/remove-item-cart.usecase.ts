import { Decorators } from '../../adapter/decorators/decorators';
import { RemoveItemCartProtocol } from '../protocols/remove-item-cart.protocol';
import { RemoveItemCartStrategy } from '../strategies/remove-item-cart.strategy';

@Decorators.Inject()
export class RemoveItemCartUsecase implements RemoveItemCartStrategy {
  constructor(
    private readonly removeItemCartProtocol: RemoveItemCartProtocol,
  ) {}

  async call(id: string, itemId: string): Promise<boolean> {
    return this.removeItemCartProtocol.call(id, itemId);
  }
}
