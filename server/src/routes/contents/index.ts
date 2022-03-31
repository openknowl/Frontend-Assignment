import { FastifyPluginCallback } from 'fastify';
import ContentCtrl from './contents.ctrl';

const contentRouter: FastifyPluginCallback = (fastify, options, done) => {
  fastify.get('/', ContentCtrl.getContentList);

  done();
};

export default contentRouter;
