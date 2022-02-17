
import { Module } from '@nestjs/common'
import { CreateSystemUserConnector } from 'src/adapter/connectors/create-system-user.connector';
import { CreateSystemUserProtocol } from 'src/core/protocols/create-system-user.protocol';
import { CreateSystemUserStrategy } from 'src/core/strategies/create-system-user.strategy';
import { CreateSystemUserUsecase } from 'src/core/usecases/create-system-user.usecase';
import { NestModuleMetadataGenerator } from 'src/infra/singletons/nest-module-metadata.generator';
import { PrismaConnectorModule } from '../../db-connection/prisma/prisma-connector.module';

@Module(
  NestModuleMetadataGenerator.generateMetadataExportingAllProviders({
    imports: [PrismaConnectorModule],
    providers: [
      {
        provide: CreateSystemUserStrategy,
        useClass: CreateSystemUserUsecase,
      },
      {
        provide: CreateSystemUserProtocol,
        useClass: CreateSystemUserConnector,
      },
    ],
  }),
)
export class CreateSystemUserFeatureModule {}
