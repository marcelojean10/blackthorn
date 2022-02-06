import { ICore } from '../../core/decorators/i-core.decorator';
import { InjectableOptions, Injectable } from '@nestjs/common';

type NestJsInjectableType = (options?: InjectableOptions) => ClassDecorator;

export const Decorators: ICore<NestJsInjectableType> = {
  Inject: Injectable,
};
