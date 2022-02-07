/**
 *
 *
 * @export
 * @abstract
 * @class RemoveItemCartStrategy
 * - Defines the business rule to perform to remove a item of cart.
 */
export abstract class RemoveItemCartStrategy {
  abstract call(id: string, itemId: string): Promise<boolean>;
}
