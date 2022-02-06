import { CreateItemModel } from '../models/create-item.model';

/**
 *
 *
 * @export
 * @abstract
 * @class CreateItemProtocol
 * - Defines the contract for implementation by external layers (not core) of performing the creation of Item
 */
export abstract class CreateItemProtocol {
  abstract call(data: CreateItemModel): Promise<CreateItemModel>;
}
