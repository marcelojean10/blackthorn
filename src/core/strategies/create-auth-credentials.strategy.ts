import { AuthCredentialsModel } from "../models/auth-credentials.model";

/**
 *
 *
 * @export
 * @abstract
 * @class CreateAuthCredentialsStrategy:
 *  - Create an instance of Auth Credentials from email, login and related user data and return an auth credentials entity from the database
 * @method call
 */
export abstract class CreateAuthCredentialsStrategy {
  abstract call(data: AuthCredentialsModel): Promise<AuthCredentialsModel>
}
