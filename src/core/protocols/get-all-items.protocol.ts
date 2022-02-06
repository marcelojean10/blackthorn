import { Item } from '@prisma/client';

export abstract class GetAllItemsProtocol {
  abstract call(): Promise<Item[]>;
}
