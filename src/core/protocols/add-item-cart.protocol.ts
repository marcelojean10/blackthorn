/**
 *
 * @export
 * @abstract
 * @class AddItemCartProtocol:
 *  - Defines the contract for implementation by external layers (not core) of performing the add item in cart a existing
 * @method call
 */
export abstract class AddItemCartProtocol {
  abstract call(cartId: string, itemId: string): Promise<boolean>;
}
