import { CreateCartModel } from '../models/create-cart.model';

/**
 *
 *
 * @export
 * @abstract
 * @class CreateCartStrategy
 * - Defines the business rule to perform to create a item.
 */
export abstract class CreateCartStrategy {
  abstract call(data: CreateCartModel): Promise<CreateCartModel>;
}
