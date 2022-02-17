import { Test, TestingModule } from '@nestjs/testing';
import { CreateCartUsecase } from '../../../../src/core/usecases/create-cart.usecase';
import { CreateCartProtocol } from '../../../../src/core/protocols/create-cart.protocol';
import { CreateCartModel } from '../../../../src/core/models/create-cart.model';
import { CreateCartStrategy } from '../../../../src/core/strategies/create-cart.strategy';
import { CreateItemModel } from '../../../../src/core/models/create-item.model';

describe('CreateCart Test', () => {
  let createCartStrategy: CreateCartStrategy;
  const cartMock: CreateCartModel = new CreateCartModel({
    discounts: 0,
    subtotal: 100,
    taxes: 0.2,
    total: 100,
    item: new CreateItemModel({
      id: 'any_id',
      name: 'any_name',
      price: Number(17.5),
    }),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CreateCartStrategy,
          useClass: CreateCartUsecase,
        },
        {
          provide: CreateCartProtocol,
          useValue: {
            call: jest.fn().mockResolvedValue(cartMock),
          },
        },
      ],
    }).compile();
    createCartStrategy = module.get(CreateCartStrategy);
  });

  it('Should be possible create a cart', async () => {
    const cartCreated = await createCartStrategy.call(cartMock);

    expect(cartCreated).toEqual(cartMock);
  });
});
