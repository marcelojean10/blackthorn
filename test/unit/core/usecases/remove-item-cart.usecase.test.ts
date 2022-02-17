import { Test, TestingModule } from '@nestjs/testing';
import { RemoveItemCartUsecase } from '../../../../src/core/usecases/remove-item-cart.usecase';
import { RemoveItemCartProtocol } from '../../../../src/core/protocols/remove-item-cart.protocol';
import { RemoveItemCartStrategy } from '../../../../src/core/strategies/remove-item-cart.strategy';

describe('RemoveItemCart Test', () => {
  let removeItemCart: RemoveItemCartStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: RemoveItemCartStrategy,
          useClass: RemoveItemCartUsecase,
        },
        {
          provide: RemoveItemCartProtocol,
          useValue: {
            call: jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();
    removeItemCart = module.get(RemoveItemCartStrategy);
  });

  it('Should be possible remove a item cart', async () => {
    const itemCreated = await removeItemCart.call('any_id', 'any_itemId');

    expect(itemCreated).toEqual(true);
  });
});
