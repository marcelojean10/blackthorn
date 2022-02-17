import { FindOneItemFromIdConnector } from '../../../../adapter/connectors/find-one-item-from-id.connector';
import { PrismaConnectorModule } from '../db-connection/prisma/prisma-connector.module';
import { FindOneItemFromIdProtocol } from '../../../../core/protocols/find-one-item-from-id.protocol';
import { NestModuleMetadataGenerator } from '../../../singletons/nest-module-metadata.generator';
import { FindOneItemFromIdStrategy } from '../../../../core/strategies/find-one-item-from-id.strategy';
import { FindOneItemFromIdUsecase } from '../../../../core/usecases/find-one-item-from-id.usecase';
import { Module } from '@nestjs/common';

@Module(
  NestModuleMetadataGenerator.generateMetadataExportingAllProviders({
    imports: [PrismaConnectorModule],
    providers: [
      {
        provide: FindOneItemFromIdStrategy,
        useClass: FindOneItemFromIdUsecase,
      },
      {
        provide: FindOneItemFromIdProtocol,
        useClass: FindOneItemFromIdConnector,
      },
    ],
  }),
)
export class FindOneItemFromIdFeatureModule {}
