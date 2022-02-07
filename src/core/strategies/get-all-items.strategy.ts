import { Item } from '@prisma/client';

/**
 *
 *
 * @export
 * @abstract
 * @class GetAllItemsStrategy
 * - Defines the business rule to perform to find all items.
 */
export abstract class GetAllItemsStrategy {
  abstract call(): Promise<Item[]>;
}
