import { Module } from '@nestjs/common';
import { CustomerService } from 'src/adapter/services/customer.service';
import { CustomerController } from 'src/infra/nestjs/http/rest/customer.controller';
import { CreateAuthFeatureModule } from '../create-auth-credentials.module';
import { CreateSystemUserFeatureModule } from './create-system-user.module';


@Module({
  imports: [CreateAuthFeatureModule, CreateSystemUserFeatureModule],
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}
