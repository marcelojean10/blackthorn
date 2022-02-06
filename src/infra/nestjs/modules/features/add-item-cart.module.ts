import { AddItemCartConnector } from '../../../../adapter/connectors/add-item-cart.connector';
import { PrismaConnectorModule } from '../db-connection/prisma/prisma-connector.module';
import { AddItemCartProtocol } from '../../../../core/protocols/add-item-cart.protocol';
import { NestModuleMetadataGenerator } from '../../../singletons/nest-module-metadata.generator';
import { AddItemCartStrategy } from '../../../../core/strategies/add-item-cart.strategy';
import { AddItemCartUsecase } from '../../../../core/usecases/add-item-cart.usecase';
import { Module } from '@nestjs/common';

@Module(
  NestModuleMetadataGenerator.generateMetadataExportingAllProviders({
    imports: [PrismaConnectorModule],
    providers: [
      {
        provide: AddItemCartStrategy,
        useClass: AddItemCartUsecase,
      },
      {
        provide: AddItemCartProtocol,
        useClass: AddItemCartConnector,
      },
    ],
  }),
)
export class AddItemCartFeatureModule {}
