import express from 'express';
import { readController } from '../controllers/controllers';
const readRouter = express.Router();

readRouter.get('/read', readController.get);

export default readRouter;
