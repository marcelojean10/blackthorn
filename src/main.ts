import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { PrismaConnector } from '../src/adapter/connectors/prisma.connector';
import { AppModule } from './infra/nestjs/modules/app.module';
import { fastifyInstance } from './infra/utils/add-hook-on-request';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

function createNestApp(): Promise<NestFastifyApplication> {
  const fastifyAdapter = new FastifyAdapter();

  fastifyInstance(fastifyAdapter);

  return NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const module: any;

type BoostrapConfigObject = {
  host: string;
  port: number;
};

function setupHotStartAndReload(app: NestFastifyApplication): void {
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

function setupGlobalPipes(app: NestFastifyApplication): void {
  app.useGlobalPipes(new ValidationPipe());
}

async function setupPrismaConnection(
  app: NestFastifyApplication,
): Promise<void> {
  const prismaService: PrismaConnector = app.get(PrismaConnector);
  await prismaService.enableShutdownHooks(app);
}

function setupSwagger(app: NestFastifyApplication): void {
  const config = new DocumentBuilder()
        .setTitle('Blackthron API')
        .setDescription('Assessment')
        .setVersion('1.0')
        .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap({ host, port }: BoostrapConfigObject) {
  const app = await createNestApp();
  app.enableCors();
  setupGlobalPipes(app);

  setupSwagger(app)
  await app.listen(port, host);
  setupHotStartAndReload(app);
  await setupPrismaConnection(app);
}

bootstrap({
  host: process.env.HOST ?? '0.0.0.0',
  port: +(process.env.PORT || '3000'),
}).then(() => {
  // eslint-disable-next-line no-console
  console.log(`run on ${process.env.HOST}:${process.env.PORT}`);
});
