import { CreateCartModel } from '../models/create-cart.model';

/**
 *
 *
 * @export
 * @abstract
 * @class CreateCartProtocol
 * - Defines the contract for implementation by external layers (not core) of performing the creation of Item
 */
export abstract class CreateCartProtocol {
  abstract call(data: CreateCartModel): Promise<CreateCartModel>;
}
