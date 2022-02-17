import { Test, TestingModule } from '@nestjs/testing';
import { FindOneItemFromIdUsecase } from '../../../../src/core/usecases/find-one-item-from-id.usecase';
import { FindOneItemFromIdProtocol } from '../../../../src/core/protocols/find-one-item-from-id.protocol';
import { CreateItemModel } from '../../../../src/core/models/create-item.model';
import { FindOneItemFromIdStrategy } from '../../../../src/core/strategies/find-one-item-from-id.strategy';

describe('FindOneItemFromId Test', () => {
  let findItemFromId: FindOneItemFromIdStrategy;
  const itemMock: CreateItemModel = new CreateItemModel({
    id: 'any_id',
    name: 'any_name',
    price: Number(17.5),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: FindOneItemFromIdStrategy,
          useClass: FindOneItemFromIdUsecase,
        },
        {
          provide: FindOneItemFromIdProtocol,
          useValue: {
            call: jest.fn().mockResolvedValue(itemMock),
          },
        },
      ],
    }).compile();
    findItemFromId = module.get(FindOneItemFromIdStrategy);
  });

  it('Should be possible find item by id', async () => {
    const item = await findItemFromId.call('any_id');

    expect(item).toEqual(itemMock);
  });
});
