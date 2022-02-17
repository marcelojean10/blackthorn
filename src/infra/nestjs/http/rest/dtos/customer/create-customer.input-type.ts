import { Type } from 'class-transformer'
import { ValidateNested } from 'class-validator'
import { CreateAuthCredentialsInputType } from './create-auth-credentials.input-type'
import { CreateUserInputType } from './create-user.input-type'


export type CreateCustomerInputTypeBuilder = {
  createAuthCredentials: CreateAuthCredentialsInputType
  createUser: CreateUserInputType
}


export class CreateCustomerInputType {
  @ValidateNested()
  @Type(() => CreateAuthCredentialsInputType)
  public readonly createAuthCredentials!: CreateAuthCredentialsInputType

  @ValidateNested()
  @Type(() => CreateUserInputType)
  public readonly createUser!: CreateUserInputType

  constructor(builder: CreateCustomerInputTypeBuilder) {
    Object.assign(this, builder)
  }

  get toMap(): Map<string, unknown> {
    return new Map(Object.entries(this))
  }

  toString(): string {
    return `${this.toMap}`
  }

  copyWith(other: CreateCustomerInputTypeBuilder): CreateCustomerInputType {
    return new CreateCustomerInputType({
      createAuthCredentials:
        other.createAuthCredentials ?? this.createAuthCredentials,
      createUser: other.createUser ?? this.createUser,
    })
  }
}
