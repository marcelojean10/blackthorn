import { Decorators } from "../../adapter/decorators/decorators";
import { CreateSystemUserModel } from "../models/system-user/create-system-user.model";
import { SystemUserIdentificationModel } from "../models/system-user/system-user-identification.model";
import { CreateSystemUserProtocol } from "../protocols/create-system-user.protocol";
import { CreateSystemUserStrategy } from "../strategies/create-system-user.strategy";


@Decorators.Inject()
export class CreateSystemUserUsecase implements CreateSystemUserStrategy {
  constructor(
    private readonly createSystemUserProtocol: CreateSystemUserProtocol,
  ) {}

  call(data: CreateSystemUserModel): Promise<SystemUserIdentificationModel> {
    return this.createSystemUserProtocol.call(data)
  }
}
