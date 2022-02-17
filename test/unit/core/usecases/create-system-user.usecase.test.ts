import { Test, TestingModule } from '@nestjs/testing';
import { CreateSystemUserUsecase } from '../../../../src/core/usecases/create-system-user.usecase';
import { CreateSystemUserProtocol } from '../../../../src/core/protocols/create-system-user.protocol';
import { CreateSystemUserStrategy } from '../../../../src/core/strategies/create-system-user.strategy';
import { CreateSystemUserModel } from '../../../../src/core/models/system-user/create-system-user.model';

describe('CreateCart Test', () => {
  let createUserStrategy: CreateSystemUserStrategy;
  const userMock: CreateSystemUserModel = new CreateSystemUserModel({
    id: 'any_id',
    name: 'any_name',
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CreateSystemUserStrategy,
          useClass: CreateSystemUserUsecase,
        },
        {
          provide: CreateSystemUserProtocol,
          useValue: {
            call: jest.fn().mockResolvedValue(userMock),
          },
        },
      ],
    }).compile();
    createUserStrategy = module.get(CreateSystemUserStrategy);
  });

  it('Should be possible create a an user', async () => {
    const userCreated = await createUserStrategy.call(userMock);

    expect(userCreated).toEqual(userMock);
  });
});
