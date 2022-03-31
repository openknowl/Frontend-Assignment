import { FastifyPluginCallback } from 'fastify';
import BannerCtrl from './banners.ctrl';

const bannerRouter: FastifyPluginCallback = (fastify, options, done) => {
  fastify.get('/', BannerCtrl.getBannerList);

  done();
};

export default bannerRouter;
