import { CreateSystemUserModel } from "../models/system-user/create-system-user.model";
import { SystemUserIdentificationModel } from "../models/system-user/system-user-identification.model";

/**
 *
 *
 * @export
 * @abstract
 * @class CreateSystemUserProtocol
 * - Defines the contract for implementation by external layers (not core) of performing the creation of SystemUser
 */
export abstract class CreateSystemUserProtocol {
  abstract call(
    data: CreateSystemUserModel,
  ): Promise<SystemUserIdentificationModel>
}
