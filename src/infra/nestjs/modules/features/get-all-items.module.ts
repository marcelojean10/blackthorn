import { GetAllItemsConnector } from '../../../../adapter/connectors/get-all-items.connectors';
import { PrismaConnectorModule } from '../db-connection/prisma/prisma-connector.module';
import { GetAllItemsProtocol } from '../../../../core/protocols/get-all-items.protocol';
import { NestModuleMetadataGenerator } from '../../../singletons/nest-module-metadata.generator';
import { GetAllItemsStrategy } from '../../../../core/strategies/get-all-items.strategy';
import { GetAllItemsUsecase } from '../../../../core/usecases/get-all-items.usecase';
import { Module } from '@nestjs/common';

@Module(
  NestModuleMetadataGenerator.generateMetadataExportingAllProviders({
    imports: [PrismaConnectorModule],
    providers: [
      {
        provide: GetAllItemsStrategy,
        useClass: GetAllItemsUsecase,
      },
      {
        provide: GetAllItemsProtocol,
        useClass: GetAllItemsConnector,
      },
    ],
  }),
)
export class GetAllItemsFeatureModule {}
