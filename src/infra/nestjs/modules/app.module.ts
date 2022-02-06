import { Module } from '@nestjs/common';
import { AppController } from '../http/rest/app.controller';
import { AppService } from '../../../adapter/services/app.service';
import { PrismaConnectorModule } from './db-connection/prisma/prisma-connector.module';
import { ItemModule } from './features/item.module';
import { CartModule } from './features/cart.module';

@Module({
  imports: [PrismaConnectorModule, ItemModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
