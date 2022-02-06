import {
  Type,
  DynamicModule,
  ForwardReference,
  Provider,
  Abstract,
  ModuleMetadata,
} from '@nestjs/common';

export class NestModuleMetadataGenerator {
  static generateMetadataExportingAllProviders(metadata: {
    imports?: Array<
      Type | DynamicModule | Promise<DynamicModule> | ForwardReference
    >;
    providers: Provider[];
    otherExports?: Array<
      | DynamicModule
      | Promise<DynamicModule>
      | string
      | symbol
      | Provider
      | ForwardReference
      | Abstract<unknown>
      // eslint-disable-next-line @typescript-eslint/ban-types
      | Function
    >;
  }): ModuleMetadata {
    const exports = [];
    exports.push(...metadata.providers);
    if (metadata.otherExports) exports.push(...metadata.otherExports);
    const response = {
      imports: metadata.imports,
      providers: metadata.providers,
      exports,
    };

    return response;
  }
}
