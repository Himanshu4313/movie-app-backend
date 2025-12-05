import infoRoute from './info.route.js';
import movieRoute from './movie.route.js';
import { Router } from 'express';

const router = Router();


router.use('/info',infoRoute);
router.use('/movies',movieRoute);

export default router;