export type CreateSystemUserModelBuilder = {
  id?: string
  name: string
}

export class CreateSystemUserModel {
  public readonly id?: string

  public readonly name!: string

  constructor(builder: CreateSystemUserModelBuilder) {
    Object.assign(this, builder)
  }

  get toMap(): Map<string, unknown> {
    return new Map(Object.entries(this))
  }

  toString(): string {
    return `${this.toMap}`
  }

  copyWith(other: CreateSystemUserModelBuilder): CreateSystemUserModel {
    return new CreateSystemUserModel({
      id: other.id ?? this.id,
      name: other.name ?? this.name,
    })
  }
}
