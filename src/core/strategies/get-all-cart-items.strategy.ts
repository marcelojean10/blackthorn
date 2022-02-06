import { CreateCartModel } from '../models/create-cart.model';

export abstract class GetAllCartItemsStrategy {
  abstract call(): Promise<CreateCartModel[]>;
}
