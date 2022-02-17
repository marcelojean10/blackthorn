export type AuthCredentialsModelBuilder = {
  id?: string
  systemUserPk: string
  login: string
  password: string
}

export class AuthCredentialsModel {
  public readonly id?: string

  public readonly systemUserPk!: string

  public readonly login!: string

  public readonly password!: string

  constructor(builder: AuthCredentialsModelBuilder) {
    Object.assign(this, builder)
  }

  get toMap(): Map<string, unknown> {
    return new Map(Object.entries(this))
  }

  toString(): string {
    return `${this.toMap}`
  }

  copyWith(other: AuthCredentialsModelBuilder): AuthCredentialsModel {
    return new AuthCredentialsModel({
      systemUserPk: other.systemUserPk ?? this.systemUserPk,
      login: other.login ?? this.login,
      password: other.password ?? this.password,
    })
  }
}
