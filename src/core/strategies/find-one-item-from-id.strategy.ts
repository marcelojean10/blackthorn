import { CreateItemModel } from '../models/create-item.model';

/**
 *
 *
 * @export
 * @abstract
 * @class FindOneItemFromIdStrategy
 * - Creates an instance of SystemUserIdentificatonModel from the foreign key to the user group
 */
export abstract class FindOneItemFromIdStrategy {
  abstract call(id: string): Promise<CreateItemModel>;
}
