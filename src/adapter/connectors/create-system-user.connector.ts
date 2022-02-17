import { CreateSystemUserModel } from "src/core/models/system-user/create-system-user.model"
import { SystemUserIdentificationModel } from "src/core/models/system-user/system-user-identification.model"
import { CreateSystemUserProtocol } from "src/core/protocols/create-system-user.protocol"
import { Decorators } from "../decorators/decorators"
import { PrismaConnector } from "./prisma.connector"


@Decorators.Inject()
export class CreateSystemUserConnector implements CreateSystemUserProtocol {
  constructor(private readonly prisma: PrismaConnector) {}

  async call(data: CreateSystemUserModel): Promise<SystemUserIdentificationModel> {
   
    const { id } = await this.prisma.users.create({
      data: {
        name: data.name,
      },
    })
    
    return new SystemUserIdentificationModel({
      id,
    })
  }
}
