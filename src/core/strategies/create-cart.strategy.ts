import { CreateCartModel } from '../models/create-cart.model';

/**
 *
 *
 * @export
 * @abstract
 * @class CreateCartStrategy
 * - Creates an instance of SystemUserIdentificatonModel from the foreign key to the user group
 */
export abstract class CreateCartStrategy {
  abstract call(data: CreateCartModel): Promise<CreateCartModel>;
}
