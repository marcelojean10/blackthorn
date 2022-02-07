import { Item } from '@prisma/client';

/**
 *
 *
 * @export
 * @abstract
 * @class GetAllItemsProtocol
 * - Defines the contract for implementation by external layers (not core) of performing find get all items
 */
export abstract class GetAllItemsProtocol {
  abstract call(): Promise<Item[]>;
}
