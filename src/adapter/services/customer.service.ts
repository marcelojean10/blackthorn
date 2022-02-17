import { AuthCredentialsModel } from 'src/core/models/auth-credentials.model';
import { CreateSystemUserModel } from 'src/core/models/system-user/create-system-user.model';
import { CreateAuthCredentialsStrategy } from 'src/core/strategies/create-auth-credentials.strategy';
import { CreateSystemUserStrategy } from 'src/core/strategies/create-system-user.strategy';
import { CreateCustomerInputType } from 'src/infra/nestjs/http/rest/dtos/customer/create-customer.input-type';
import { CustomerObjectType } from 'src/infra/nestjs/http/rest/dtos/customer/objects/customer.object-type';
import { Decorators } from '../decorators/decorators';

@Decorators.Inject()
export class CustomerService {
  constructor(
    private readonly createSystemUserStrategy: CreateSystemUserStrategy,
    private readonly createAuthCredentialsStrategy: CreateAuthCredentialsStrategy,
  ) {}

  async createCustomerUser(createCustomerUserInputType: CreateCustomerInputType): Promise<CustomerObjectType> {
     const { createAuthCredentials, createUser } = createCustomerUserInputType
   
     const { id } = await this.createSystemUserStrategy.call(
      new CreateSystemUserModel({
        name: createUser.name,
      })
     )

     const { login } = await this.createAuthCredentialsStrategy.call(
      new AuthCredentialsModel({
        login: createAuthCredentials.login,
        password: createAuthCredentials.password,
        systemUserPk: id,
      }),
    )
 
     const response = new CustomerObjectType({
      id,
      name: createUser.name,
      login,
    })

    return response
  }
}