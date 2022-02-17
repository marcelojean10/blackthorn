import { CreateItemConnector } from '../../../../adapter/connectors/create-item.connector';
import { PrismaConnectorModule } from '../db-connection/prisma/prisma-connector.module';
import { CreateItemProtocol } from '../../../../core/protocols/create-item.protocol';
import { NestModuleMetadataGenerator } from '../../../singletons/nest-module-metadata.generator';
import { CreateItemStrategy } from '../../../../core/strategies/create-item.strategy';
import { CreateItemUsecase } from '../../../../core/usecases/create-item.usecase';
import { Module } from '@nestjs/common';

@Module(
  NestModuleMetadataGenerator.generateMetadataExportingAllProviders({
    imports: [PrismaConnectorModule],
    providers: [
      {
        provide: CreateItemStrategy,
        useClass: CreateItemUsecase,
      },
      {
        provide: CreateItemProtocol,
        useClass: CreateItemConnector,
      },
    ],
  }),
)
export class CreateItemFeatureModule {}
