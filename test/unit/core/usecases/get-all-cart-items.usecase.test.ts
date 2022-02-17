import { Test, TestingModule } from '@nestjs/testing';
import { GetAllCartItemsStrategy } from '../../../../src/core/strategies/get-all-cart-items.strategy';
import { GetAllCartItemsUsecase } from '../../../../src/core/usecases/get-all-cart-items.usecase';
import { GetAllCartItemsProtocol } from '../../../../src/core/protocols/get-all-cart-items.protocol';
import { CartItems } from '@prisma/client';

describe('GetAllCartItems Test', () => {
  let getAllCartItemsStrategy: GetAllCartItemsStrategy;
  const cartItemsMock: CartItems[] = [
    {
      id: 'any_id',
      cart_id: 'any_id',
      item_id: 'any_id',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: GetAllCartItemsStrategy,
          useClass: GetAllCartItemsUsecase,
        },
        {
          provide: GetAllCartItemsProtocol,
          useValue: {
            call: jest.fn().mockResolvedValue(cartItemsMock),
          },
        },
      ],
    }).compile();
    getAllCartItemsStrategy = module.get(GetAllCartItemsStrategy);
  });

  it('Should be possible list all cart items', async () => {
    const items = await getAllCartItemsStrategy.call();

    expect(items).toEqual(cartItemsMock);
  });
});
