import express from 'express';
const router = express.Router();
import baseRouter from './baseRouter';
import memoryRouter from './memoryRouter';

router.use(baseRouter);
router.use(memoryRouter);

export default router;
