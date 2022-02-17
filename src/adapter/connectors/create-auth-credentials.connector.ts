import { AuthCredentialsModel } from "../../core/models/auth-credentials.model"
import { CreateAuthCredentialsProtocol } from "../../core/protocols/create-auth-credentials.protocol"
import { Decorators } from "../../adapter/decorators/decorators"
import { PrismaConnector } from "../../adapter/connectors/prisma.connector"


@Decorators.Inject()
export class CreateAuthCredentialsConnector
  implements CreateAuthCredentialsProtocol
{
  constructor(private readonly prismaConnector: PrismaConnector) {}

  async call(data: AuthCredentialsModel): Promise<AuthCredentialsModel> {
    const savedEntity = await this.prismaConnector.authCredentials.create({
      data: {
        user_id: data.systemUserPk,
        password: data.password,
        login: data.login,
      },
      select: {
        user_id: true,
        id: true,
        login: true,
        password: true,
      },
    })

    return new AuthCredentialsModel({
      systemUserPk: savedEntity.user_id,
      id: savedEntity.id,
      login: savedEntity.login,
      password: savedEntity.password,
    })
  }
}
