import { Test, TestingModule } from '@nestjs/testing';
import { CreateAuthCredentialsUsecase } from '../../../../src/core/usecases/create-auth-credentials.usecase';
import { CreateAuthCredentialsProtocol } from '../../../../src/core/protocols/create-auth-credentials.protocol';
import { CreateAuthCredentialsStrategy } from '../../../../src/core/strategies/create-auth-credentials.strategy';
import { AuthCredentialsModel } from '../../../../src/core/models/auth-credentials.model';

describe('CreateAuthCrdentials Test', () => {
  let createAuthCredentialsStrategy: CreateAuthCredentialsStrategy;
  const authCredentialsMock: AuthCredentialsModel = new AuthCredentialsModel({
    id: 'any_id',
    login: 'any_login',
    password: 'any_password',
    systemUserPk: 'any_user_id'
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CreateAuthCredentialsStrategy,
          useClass: CreateAuthCredentialsUsecase,
        },
        {
          provide: CreateAuthCredentialsProtocol,
          useValue: {
            call: jest.fn().mockResolvedValue(authCredentialsMock),
          },
        },
      ],
    }).compile();
    createAuthCredentialsStrategy = module.get(CreateAuthCredentialsStrategy);
  });

  it('Should be possible create a an auth credentials', async () => {
    const userCreated = await createAuthCredentialsStrategy.call(authCredentialsMock);

    expect(userCreated).toEqual(authCredentialsMock);
  });
});
