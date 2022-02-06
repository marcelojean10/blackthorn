import { FastifyAdapter } from '@nestjs/platform-fastify';
import { ServerResponse } from 'http';

/**
 * WorkArround para alteração da reposta da requisição
 *
 */
export const fastifyInstance = (fastifyAdapter: FastifyAdapter): void => {
  const fastifyInstanceNew = fastifyAdapter.getInstance();
  fastifyInstanceNew.addHook('onRequest', (req, reply, done) => {
    const newReply = {
      setHeader(
        name: string,
        value: number | string | ReadonlyArray<string>,
      ): ServerResponse {
        return this.raw.setHeader(name, value);
      },

      end(): void {
        return this.raw.end();
      },
      ...reply,
    };

    Object.assign(reply, newReply);
    done();
  });

  fastifyAdapter.setInstance(fastifyInstanceNew);
};
