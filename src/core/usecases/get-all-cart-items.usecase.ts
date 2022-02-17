import { Decorators } from '../../adapter/decorators/decorators';
import { CreateCartModel } from '../models/create-cart.model';
import { GetAllCartItemsProtocol } from '../protocols/get-all-cart-items.protocol';
import { GetAllCartItemsStrategy } from '../strategies/get-all-cart-items.strategy';

@Decorators.Inject()
export class GetAllCartItemsUsecase implements GetAllCartItemsStrategy {
  constructor(
    private readonly getAllCartItemsProtocol: GetAllCartItemsProtocol,
  ) {}

  call(): Promise<CreateCartModel[]> {
    return this.getAllCartItemsProtocol.call();
  }
}
