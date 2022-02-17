import { PrismaConnectorModule } from '../db-connection/prisma/prisma-connector.module';
import { NestModuleMetadataGenerator } from '../../../singletons/nest-module-metadata.generator';
import { Module } from '@nestjs/common';
import { GetCartByUserIdStrategy } from 'src/core/strategies/get-cart-by-user-id.strategy';
import { GetCartByUserIdUsecase } from 'src/core/usecases/get-cart-by-user-id.protocol';
import { GetCartByUserIdProtocol } from 'src/core/protocols/get-cart-by-user-id.protocol';
import { GetCartByUserIdConnector } from 'src/adapter/connectors/get-cart-by-user-id.connector';

@Module(
  NestModuleMetadataGenerator.generateMetadataExportingAllProviders({
    imports: [PrismaConnectorModule],
    providers: [
      {
        provide: GetCartByUserIdStrategy,
        useClass: GetCartByUserIdUsecase,
      },
      {
        provide: GetCartByUserIdProtocol,
        useClass: GetCartByUserIdConnector,
      },
    ],
  }),
)
export class GetCartByUserIdFeatureModule {}
