import express from 'express';
import routes from './routes/routes';
import morgan from 'morgan';
import http from 'http';
const app = express();
const httpServer = http.createServer(app);

app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

export default httpServer;
