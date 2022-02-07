/**
 *
 * @export
 * @abstract
 * @class AddItemCartStrategy:
 *  - Defines the business rule to perform the add item of cart
 * @method call
 */
export abstract class AddItemCartStrategy {
  abstract call(cartId: string, itemId: string): Promise<boolean>;
}
