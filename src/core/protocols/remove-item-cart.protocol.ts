/**
 *
 *
 * @export
 * @abstract
 * @class RemoveItemCartProtocol
 * - Defines the contract for implementation by external layers (not core) of performing remove item cart
 */
export abstract class RemoveItemCartProtocol {
  abstract call(id: string, itemId: string): Promise<boolean>;
}
