import { CreateItemModel } from '../models/create-item.model';

/**
 *
 *
 * @export
 * @abstract
 * @class FindOneItemFromIdProtocol
 * - Defines the contract for implementation by external layers (not core) of performing find a item by id
 */
export abstract class FindOneItemFromIdProtocol {
  abstract call(id: string): Promise<CreateItemModel>;
}
