import { GetAllCartItemsConnector } from '../../../../adapter/connectors/get-all-cart-items.connector';
import { PrismaConnectorModule } from '../db-connection/prisma/prisma-connector.module';
import { GetAllCartItemsProtocol } from '../../../../core/protocols/get-all-cart-items.protocol';
import { NestModuleMetadataGenerator } from '../../../singletons/nest-module-metadata.generator';
import { GetAllCartItemsStrategy } from '../../../../core/strategies/get-all-cart-items.strategy';
import { GetAllCartItemsUsecase } from '../../../../core/usecases/get-all-cart-items.usecase';
import { Module } from '@nestjs/common';

@Module(
  NestModuleMetadataGenerator.generateMetadataExportingAllProviders({
    imports: [PrismaConnectorModule],
    providers: [
      {
        provide: GetAllCartItemsStrategy,
        useClass: GetAllCartItemsUsecase,
      },
      {
        provide: GetAllCartItemsProtocol,
        useClass: GetAllCartItemsConnector,
      },
    ],
  }),
)
export class GetAllCartItemsFeatureModule {}
