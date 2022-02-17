import { AuthCredentialsModel } from "../models/auth-credentials.model";

/**
 *
 *
 * @export
 * @abstract
 * @class CreateAuthCredentialsProtocol
 * - Defines the contract for implementation by external layers (not core) of performing the creation of user credentials
 */
export abstract class CreateAuthCredentialsProtocol {
  abstract call(data: AuthCredentialsModel): Promise<AuthCredentialsModel>
}
