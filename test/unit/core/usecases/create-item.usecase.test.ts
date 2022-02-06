import { Test, TestingModule } from '@nestjs/testing';
import { CreateItemUsecase } from '../../../../src/core/usecases/create-item.usecase';
import { CreateItemProtocol } from '../../../../src/core/protocols/create-item.protocol';
import { CreateItemModel } from '../../../../src/core/models/create-item.model';
import { CreateItemStrategy } from '../../../../src/core/strategies/create-item.strategy';

describe('CreateCart Test', () => {
  let createItemStrategy: CreateItemStrategy;
  const itemMock: CreateItemModel = new CreateItemModel({
    pk: 'any_pk',
    name: 'any_name',
    price: Number(17.5),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CreateItemStrategy,
          useClass: CreateItemUsecase,
        },
        {
          provide: CreateItemProtocol,
          useValue: {
            call: jest.fn().mockResolvedValue(itemMock),
          },
        },
      ],
    }).compile();
    createItemStrategy = module.get(CreateItemStrategy);
  });

  it('Should be possible create a item', async () => {
    const itemCreated = await createItemStrategy.call(itemMock);

    expect(itemCreated).toEqual(itemMock);
  });
});
