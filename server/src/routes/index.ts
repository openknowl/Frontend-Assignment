import { FastifyPluginCallback, FastifyRequest, FastifyReply } from 'fastify';
import contentRouter from './contents';
import bannerRouter from './banners';

const routes: FastifyPluginCallback = (fastify, options, done) => {
  fastify.get('/', async (req: FastifyRequest, reply: FastifyReply) => {
    reply.send('Hello World!');
  });

  fastify.register(contentRouter, { prefix: '/contents' });
  fastify.register(bannerRouter, { prefix: '/banners' });

  done();
};

export default routes;
