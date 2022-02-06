import { CreateItemModel } from '../models/create-item.model';

/**
 *
 *
 * @export
 * @abstract
 * @class FindOneItemFromIdProtocol
 * - Defines the contract for implementation by external layers (not core) of performing the creation of SystemUser
 */
export abstract class FindOneItemFromIdProtocol {
  abstract call(id: string): Promise<CreateItemModel>;
}
