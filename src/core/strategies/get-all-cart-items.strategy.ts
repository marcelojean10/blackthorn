import { CreateCartModel } from '../models/create-cart.model';

/**
 *
 *
 * @export
 * @abstract
 * @class GetAllCartItemsStrategy
 * - Defines the business rule to perform to find all items cart.
 */
export abstract class GetAllCartItemsStrategy {
  abstract call(): Promise<CreateCartModel[]>;
}
