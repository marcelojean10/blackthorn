import { RemoveItemCartConnector } from '../../../../adapter/connectors/remove-item-cart.connector';
import { PrismaConnectorModule } from '../db-connection/prisma/prisma-connector.module';
import { RemoveItemCartProtocol } from '../../../../core/protocols/remove-item-cart.protocol';
import { NestModuleMetadataGenerator } from '../../../singletons/nest-module-metadata.generator';
import { RemoveItemCartStrategy } from '../../../../core/strategies/remove-item-cart.strategy';
import { RemoveItemCartUsecase } from '../../../../core/usecases/remove-item-cart.usecase';
import { Module } from '@nestjs/common';

@Module(
  NestModuleMetadataGenerator.generateMetadataExportingAllProviders({
    imports: [PrismaConnectorModule],
    providers: [
      {
        provide: RemoveItemCartStrategy,
        useClass: RemoveItemCartUsecase,
      },
      {
        provide: RemoveItemCartProtocol,
        useClass: RemoveItemCartConnector,
      },
    ],
  }),
)
export class RemoveItemCartFeatureModule {}
