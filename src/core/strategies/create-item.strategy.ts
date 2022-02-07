import { CreateItemModel } from '../models/create-item.model';

/**
 *
 *
 * @export
 * @abstract
 * @class CreateItemStrategy
 * - Defines the business rule to perform to create a item.
 */
export abstract class CreateItemStrategy {
  abstract call(data: CreateItemModel): Promise<CreateItemModel>;
}
