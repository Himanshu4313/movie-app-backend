import { Router } from "express";
import {createMovie, deleteMovie, editMovieDetails, getAllMovies, getMovieById } from '../../controllers/movie.controllers.js';
import movieValidation from "../../middleware/movie.validation.js";
const router = Router();

router.post('/',movieValidation,createMovie); //creation of movie logic
router.get('/',getAllMovies); //fetch all movie details 
router.get('/:id',getMovieById); //fetch particullar movie details 
router.delete('/:id',deleteMovie); //delete movie details using id 
router.patch('/:id',editMovieDetails);//for update the movie details

export default router; 