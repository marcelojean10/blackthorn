import { Module } from '@nestjs/common'
import { CreateAuthCredentialsConnector } from 'src/adapter/connectors/create-auth-credentials.connector'
import { CreateAuthCredentialsProtocol } from 'src/core/protocols/create-auth-credentials.protocol'
import { CreateAuthCredentialsStrategy } from 'src/core/strategies/create-auth-credentials.strategy'
import { CreateAuthCredentialsUsecase } from 'src/core/usecases/create-auth-credentials.usecase'
import { NestModuleMetadataGenerator } from 'src/infra/singletons/nest-module-metadata.generator'
import { PrismaConnectorModule } from '../db-connection/prisma/prisma-connector.module'

@Module(
  NestModuleMetadataGenerator.generateMetadataExportingAllProviders({
    imports: [PrismaConnectorModule],
    providers: [
      {
        provide: CreateAuthCredentialsStrategy,
        useClass: CreateAuthCredentialsUsecase,
      },
      {
        provide: CreateAuthCredentialsProtocol,
        useClass: CreateAuthCredentialsConnector,
      },
    ],
  }),
)
export class CreateAuthFeatureModule {}
