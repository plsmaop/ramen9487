import express from 'express';
import ramenRestaurant from './ramenRestaurant';

const router = express.Router();
router.use('/restaurant', ramenRestaurant);

export default router;
