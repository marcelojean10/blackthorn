import { Body, Controller, Post } from '@nestjs/common';
import { CustomerService } from 'src/adapter/services/customer.service';
import { CreateCustomerInputType } from './dtos/customer/create-customer.input-type';
import { CustomerObjectType } from './dtos/customer/objects/customer.object-type';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async createCommonUser(@Body('data') data: CreateCustomerInputType): Promise<CustomerObjectType> {
    const customerObjectType = await this.customerService.createCustomerUser(
      data
    )
    return customerObjectType
  }
}