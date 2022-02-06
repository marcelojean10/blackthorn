import { Item } from '@prisma/client';

export abstract class GetAllItemsStrategy {
  abstract call(): Promise<Item[]>;
}
