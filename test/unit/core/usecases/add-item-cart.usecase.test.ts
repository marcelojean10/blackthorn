import { Test, TestingModule } from '@nestjs/testing';
import { AddItemCartUsecase } from '../../../../src/core/usecases/add-item-cart.usecase';
import { AddItemCartProtocol } from '../../../../src/core/protocols/add-item-cart.protocol';
import { AddItemCartStrategy } from '../../../../src/core/strategies/add-item-cart.strategy';

describe('AddItemCart Test', () => {
  let addItemCart: AddItemCartStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AddItemCartStrategy,
          useClass: AddItemCartUsecase,
        },
        {
          provide: AddItemCartProtocol,
          useValue: {
            call: jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();
    addItemCart = module.get(AddItemCartStrategy);
  });

  it('Should be possible add a item in cart', async () => {
    const itemIsAddedCArt = await addItemCart.call('any_cartId', 'any_itemId');

    expect(itemIsAddedCArt).toEqual(true);
  });
});
