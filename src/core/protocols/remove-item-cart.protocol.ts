export abstract class RemoveItemCartProtocol {
  abstract call(id: string, itemId: string): Promise<boolean>;
}
