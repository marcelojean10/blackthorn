export abstract class GetCartByUserIdProtocol {
  abstract call(userId: string): Promise<any>;
}
