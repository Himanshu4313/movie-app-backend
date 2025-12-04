import infoRoute from './info.route.js';
import { Router } from 'express';

const router = Router();


router.use('/info',infoRoute);

export default router;