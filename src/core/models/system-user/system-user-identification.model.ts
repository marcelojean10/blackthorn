export type SystemUserIdentificationModelBuilder = {
  id: string
}

export class SystemUserIdentificationModel {
  public readonly id!: string

  constructor(builder: SystemUserIdentificationModelBuilder) {
    Object.assign(this, builder)
  }

  get toMap(): Map<string, unknown> {
    return new Map(Object.entries(this))
  }

  toString(): string {
    return `${this.toMap}`
  }

  copyWith(
    other: SystemUserIdentificationModelBuilder,
  ): SystemUserIdentificationModel {
    return new SystemUserIdentificationModel({
      id: other.id ?? this.id,
    })
  }
}
