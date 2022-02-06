import { CreateCartConnector } from '../../../../adapter/connectors/create-cart.connector';
import { PrismaConnectorModule } from '../db-connection/prisma/prisma-connector.module';
import { CreateCartProtocol } from '../../../../core/protocols/create-cart.protocol';
import { NestModuleMetadataGenerator } from '../../../singletons/nest-module-metadata.generator';
import { CreateCartStrategy } from '../../../../core/strategies/create-cart.strategy';
import { CreateCartUsecase } from '../../../../core/usecases/create-cart.usecase';
import { Module } from '@nestjs/common';

@Module(
  NestModuleMetadataGenerator.generateMetadataExportingAllProviders({
    imports: [PrismaConnectorModule],
    providers: [
      {
        provide: CreateCartStrategy,
        useClass: CreateCartUsecase,
      },
      {
        provide: CreateCartProtocol,
        useClass: CreateCartConnector,
      },
    ],
  }),
)
export class CreateCartFeatureModule {}
