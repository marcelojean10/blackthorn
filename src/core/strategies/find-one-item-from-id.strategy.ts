import { CreateItemModel } from '../models/create-item.model';

/**
 *
 *
 * @export
 * @abstract
 * @class FindOneItemFromIdStrategy
 * - Defines the business rule to perform to find item.
 */
export abstract class FindOneItemFromIdStrategy {
  abstract call(id: string): Promise<CreateItemModel>;
}
