import { CreateCartModel } from '../models/create-cart.model';

export abstract class GetAllCartItemsProtocol {
  abstract call(): Promise<CreateCartModel[]>;
}
