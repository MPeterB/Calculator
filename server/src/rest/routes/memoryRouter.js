import express from 'express';
import { memoryController } from '../controllers/controllers';
const memoryRouter = express.Router();

memoryRouter.get('/read', memoryController.get);
memoryRouter.post('/save', memoryController.post);

export default memoryRouter;
