import { Decorators } from '../../adapter/decorators/decorators'
import { AuthCredentialsModel } from '../models/auth-credentials.model'
import { CreateAuthCredentialsProtocol } from '../protocols/create-auth-credentials.protocol'
import { CreateAuthCredentialsStrategy } from '../strategies/create-auth-credentials.strategy'

@Decorators.Inject()
export class CreateAuthCredentialsUsecase
  implements CreateAuthCredentialsStrategy
{
  constructor(
    private readonly createAuthCredentialsProtocol: CreateAuthCredentialsProtocol,
  ) {}

  call(data: AuthCredentialsModel): Promise<AuthCredentialsModel> {
    return this.createAuthCredentialsProtocol.call(data)
  }
}
