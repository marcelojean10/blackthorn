import { PrismaConnector } from '../../../../../adapter/connectors/prisma.connector';
import { NestModuleMetadataGenerator } from '../../../../singletons/nest-module-metadata.generator';
import { Module } from '@nestjs/common';

@Module(
  NestModuleMetadataGenerator.generateMetadataExportingAllProviders({
    providers: [PrismaConnector],
  }),
)
export class PrismaConnectorModule {}
