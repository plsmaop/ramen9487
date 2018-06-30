import express from 'express';
import user from './user';
import ramen from './ramen';

const router = express.Router();
router.use('/user', user);
router.use('/ramen', ramen);

export default router;
