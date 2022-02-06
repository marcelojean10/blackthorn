export abstract class RemoveItemCartStrategy {
  abstract call(id: string, itemId: string): Promise<boolean>;
}
