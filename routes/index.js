import express from 'express';

import { listRouter, profileRouter } from './profiles.js';

const router = express.Router()

// TODO: ask if we can rewrite this API to just use /profiles
router.use('/profiles', listRouter);
router.use('/profile', profileRouter);

export default router;
