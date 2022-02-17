import { CreateSystemUserModel } from "../models/system-user/create-system-user.model";
import { SystemUserIdentificationModel } from "../models/system-user/system-user-identification.model";

/**
 *
 *
 * @export
 * @abstract
 * @class CreateSystemUserStrategy
 * - Creates an instance of SystemUserIdentificatonModel from the foreign key to the user group
 */
export abstract class CreateSystemUserStrategy {
  abstract call(
    data: CreateSystemUserModel,
  ): Promise<SystemUserIdentificationModel>
}
