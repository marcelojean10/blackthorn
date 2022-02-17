import { Decorators } from '../../adapter/decorators/decorators';
import { GetCartByUserIdProtocol } from '../protocols/get-cart-by-user-id.protocol';
import { GetCartByUserIdStrategy } from '../strategies/get-cart-by-user-id.strategy';

@Decorators.Inject()
export class GetCartByUserIdUsecase implements GetCartByUserIdStrategy {
  constructor(private readonly getCartByUserIdProtocol: GetCartByUserIdProtocol) {}

  call(userId: string): Promise<void> {
    return this.getCartByUserIdProtocol.call(userId);
  }
}