import { Router } from "express";
import {createMovie } from '../../controllers/movie.controllers.js';
const router = Router();

router.post('/',createMovie);

export default router; 