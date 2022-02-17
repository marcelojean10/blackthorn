export type CreateItemModelBuild = {
  id?: string
  name: string;
  price: number;
};

export class CreateItemModel {
  public readonly id?: string

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
      id: other.id ?? this.id,
      name: other.name ?? this.name,
      price: other.price ?? this.price,
    });
  }
}
