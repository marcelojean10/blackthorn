import { Test, TestingModule } from '@nestjs/testing';
import { GetCartByUserIdStrategy } from '../../../../src/core/strategies/get-cart-by-user-id.strategy';
import { GetCartByUserIdUsecase } from '../../../../src/core/usecases/get-cart-by-user-id.usecase';
import { GetCartByUserIdProtocol } from '../../../../src/core/protocols/get-cart-by-user-id.protocol';
import { CartItems } from '@prisma/client';

describe('GetCartByUserId Test', () => {
  let getCartByUserIdStrategy: GetCartByUserIdStrategy;
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
          provide: GetCartByUserIdStrategy,
          useClass: GetCartByUserIdUsecase,
        },
        {
          provide: GetCartByUserIdProtocol,
          useValue: {
            call: jest.fn().mockResolvedValue(cartItemsMock),
          },
        },
      ],
    }).compile();
    getCartByUserIdStrategy = module.get(GetCartByUserIdStrategy);
  });

  it('Should be possible list a an cart and items', async () => {
    const items = await getCartByUserIdStrategy.call('any_id');

    expect(items).toEqual(cartItemsMock);
  });
});
