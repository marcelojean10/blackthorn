export type CreateItemModelBuild = {
  pk?: string;
  name: string;
  price: number;
};

export class CreateItemModel {
  public readonly pk?: string;

  public readonly name!: string;

  public readonly price!: number;

  constructor(builder: CreateItemModelBuild) {
    Object.assign(this, builder);
  }

  get toMap(): Map<string, unknown> {
    return new Map(Object.entries(this));
  }

  toString(): string {
    return `${this.toMap}`;
  }

  copyWith(other: CreateItemModelBuild): CreateItemModel {
    return new CreateItemModel({
      pk: other.pk ?? this.pk,
      name: other.name ?? this.name,
      price: other.price ?? this.price,
    });
  }
}
