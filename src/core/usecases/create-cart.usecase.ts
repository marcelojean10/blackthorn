import { Decorators } from '../../adapter/decorators/decorators';
import { CreateCartProtocol } from '../protocols/create-cart.protocol';
import { CreateCartStrategy } from '../strategies/create-cart.strategy';
import { CreateCartModel } from '../models/create-cart.model';

@Decorators.Inject()
export class CreateCartUsecase implements CreateCartStrategy {
  constructor(private readonly createCartProtocol: CreateCartProtocol) {}

  call(data: CreateCartModel): Promise<CreateCartModel> {
    return this.createCartProtocol.call(data);
  }
}
