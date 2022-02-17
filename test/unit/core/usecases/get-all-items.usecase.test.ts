import { Test, TestingModule } from '@nestjs/testing';
import { GetAllItemsStrategy } from '../../../../src/core/strategies/get-all-items.strategy';
import { GetAllItemsUsecase } from '../../../../src/core/usecases/get-all-items.usecase';
import { GetAllItemsProtocol } from '../../../../src/core/protocols/get-all-items.protocol';
import { CreateItemModel } from '../../../../src/core/models/create-item.model';

describe('GetAllItems Test', () => {
  let getAllItemsStrategy: GetAllItemsStrategy;
  const itemsMock: CreateItemModel[] = [
    new CreateItemModel({
      id: 'any_id',
      name: 'any_name',
      price: Number(17.5),
    }),
    new CreateItemModel({
      id: 'any_id',
      name: 'any_name_2',
      price: Number(1.5),
    }),
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: GetAllItemsStrategy,
          useClass: GetAllItemsUsecase,
        },
        {
          provide: GetAllItemsProtocol,
          useValue: {
            call: jest.fn().mockResolvedValue(itemsMock),
          },
        },
      ],
    }).compile();
    getAllItemsStrategy = module.get(GetAllItemsStrategy);
  });

  it('Should be possible list all items', async () => {
    const items = await getAllItemsStrategy.call();

    expect(items).toEqual(itemsMock);
  });
});
