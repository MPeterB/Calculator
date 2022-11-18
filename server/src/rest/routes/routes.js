import express from 'express';
const router = express.Router();
import baseRouter from './baseRouter';
import saveRouter from './saveRouter';
import readRouter from './readRouter';

router.use(baseRouter);
router.use(saveRouter);
router.use(readRouter);

export default router;
