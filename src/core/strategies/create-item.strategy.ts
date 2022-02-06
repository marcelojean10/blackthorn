import { CreateItemModel } from '../models/create-item.model';

/**
 *
 *
 * @export
 * @abstract
 * @class CreateItemStrategy
 * - Creates an instance of SystemUserIdentificatonModel from the foreign key to the user group
 */
export abstract class CreateItemStrategy {
  abstract call(data: CreateItemModel): Promise<CreateItemModel>;
}
