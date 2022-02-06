import { Decimal } from '@prisma/client/runtime';
import { CreateItemModel } from './create-item.model';

export type CreateCartModelBuild = {
  pk?: string;
  subtotal: Decimal | number | string;
  discounts: Decimal | number | string;
  taxes: Decimal | number | string;
  total: Decimal | number | string;
  itemPk?: string;
  item?: CreateItemModel;
};

export class CreateCartModel {
  public readonly pk?: string;

  public readonly subtotal!: number;

  public readonly discounts!: number;

  public readonly property!: number;

  public readonly taxes!: number;

  public readonly total!: number;

  public readonly itemPk?: string;

  public readonly item?: CreateItemModel;

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
      pk: other.pk ?? this.pk,
      discounts: other.discounts ?? this.discounts,
      subtotal: other.subtotal ?? this.subtotal,
      taxes: other.taxes ?? this.taxes,
      total: other.total ?? this.total,
      itemPk: other.itemPk ?? this.itemPk,
      item: other.item ?? this.item,
    });
  }
}
