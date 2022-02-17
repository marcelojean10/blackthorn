import { Decimal } from '@prisma/client/runtime';
import { CreateItemModel } from './create-item.model';
import { CreateSystemUserModel } from './system-user/create-system-user.model';

export type CreateCartModelBuild = {
  id?: string;
  subtotal: Decimal | number | string;
  discounts: Decimal | number | string;
  taxes: Decimal | number | string;
  total: Decimal | number | string;
  itemId?: string;
  item?: CreateItemModel;
  userId?: string;
  user?: CreateSystemUserModel;
};

export class CreateCartModel {
  public readonly id?: string;

  public readonly subtotal!: number;

  public readonly discounts!: number;

  public readonly property!: number;

  public readonly taxes!: number;

  public readonly total!: number;

  public readonly itemId?: string;

  public readonly item?: CreateItemModel;

  public readonly userId?: string;

  public readonly user!: CreateSystemUserModel;


  constructor(builder: CreateCartModelBuild) {
    Object.assign(this, builder);
  }

  get toMap(): Map<string, unknown> {
    return new Map(Object.entries(this));
  }

  toString(): string {
    return `${this.toMap}`;
  }

  copyWith(other: CreateCartModelBuild): CreateCartModel {
    return new CreateCartModel({
      id: other.id ?? this.id,
      discounts: other.discounts ?? this.discounts,
      subtotal: other.subtotal ?? this.subtotal,
      taxes: other.taxes ?? this.taxes,
      total: other.total ?? this.total,
      itemId: other.itemId ?? this.itemId,
      item: other.item ?? this.item,
      userId: other.userId ?? this.userId,
      user: other.user ?? this.user,
    });
  }
}
