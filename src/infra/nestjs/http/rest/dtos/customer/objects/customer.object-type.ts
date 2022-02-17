import { PrimaryKey } from 'src/core/types/primary.key'


export type CommonUserObjectTypeBuilder = {
  id: string
  login: string
  name: string
}

export class CustomerObjectType {
  public readonly id!: string

  public readonly login!: string

  public readonly name!: string

  constructor(builder: CommonUserObjectTypeBuilder) {
    Object.assign(this, builder)
  }

  get toMap(): Map<string, unknown> {
    return new Map(Object.entries(this))
  }

  toString(): string {
    return `${this.toMap}`
  }

  copyWith(other: CommonUserObjectTypeBuilder): CustomerObjectType {
    return new CustomerObjectType({
      id: other.id ?? this.id,
      login: other.login ?? this.login,
      name: other.name ?? this.name,
    })
  }
}
