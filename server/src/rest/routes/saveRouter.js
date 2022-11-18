import express from 'express';
import { saveController } from '../controllers/controllers';
const saveRouter = express.Router();

saveRouter.post('/save', saveController.post);

export default saveRouter;
