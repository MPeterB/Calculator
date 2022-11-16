import dotenv from 'dotenv';
import server from './src/rest/server';
import logger from './src/logger/logger';

dotenv.config();
const PORT = process.env.PORT;

server.listen(PORT, () => {
  logger.info(`Calculator's server side running on port ${PORT}`);
});
