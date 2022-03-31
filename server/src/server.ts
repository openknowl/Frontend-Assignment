import fastify from 'fastify';
import routes from 'routes';
import { CustomCors } from 'plugins/custom-cors';

const port = 8080;

export function Server() {
  const server = fastify({
    logger: {
      level: 'info',
      prettyPrint: true,
    },
  });

  server.register(CustomCors);

  server.register(routes, { prefix: '/api' });

  server.listen(port, (err, address) => {
    if (err) {
      server.log.error(err);
      return;
    }
    console.log(`Server is Running: ${address}`);
  });
}

Server();
