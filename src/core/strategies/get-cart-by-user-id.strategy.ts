export abstract class GetCartByUserIdStrategy {
  abstract call(userId: string): Promise<any>;
}
