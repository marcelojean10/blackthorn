import { CreateCartModel } from '../models/create-cart.model';

/**
 *
 *
 * @export
 * @abstract
 * @class GetAllCartItemsProtocol
 * - Defines the contract for implementation by external layers (not core) of performing get all items of cart
 */
export abstract class GetAllCartItemsProtocol {
  abstract call(): Promise<CreateCartModel[]>;
}
