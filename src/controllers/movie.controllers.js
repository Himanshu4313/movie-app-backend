import movieModel from "../model/movie.model.js";
import { errorResponse, successResponse } from "../../utils/responsedata.js";

export const createMovie = async (req, res) => {
  try {
    const newMovie = await movieModel.create(req.body); // req.body its contain json type data.
    if (!newMovie) {
      errorResponse.message = "Failed to creating movie";
      return res.status(501).json(errorResponse);
    }

    successResponse.data = newMovie;
    successResponse.message = "Successfully Created Movie";
    return res.status(201).json(successResponse);
  } catch (error) {
    console.log(error);
    errorResponse.error = error.message;
    errorResponse.message = "Something went wrong while creating movie";
    return res.status(501).json(errorResponse);
  }
};

export const getMovieById = async (req, res) => {
  try {
    const movieDetails = await movieModel.findById(req.params.id);

    if (!movieDetails) {
      errorResponse.message = "Movie is not found";
      return res.status(501).json(errorResponse);
    }

    successResponse.data = movieDetails;
    successResponse.message = "Successfully Fetch the movie details";
    return res.status(201).json(successResponse);
  } catch (error) {
    console.log("Error fetch movie by id", error);

    errorResponse.error = error.message;
    errorResponse.message = "Something went wrong while fetching movie details";
    return res.status(501).json(errorResponse);
  }
};

export const getAllMovies = async (req, res) => {
  try {
    const movies = await movieModel.find({});

    if (!movies) {
      errorResponse.message = "NO movie collections found";
      return res.status(501).json(errorResponse);
    }

    successResponse.data = movies;
    successResponse.message = "Successfully fetch the movie collection";
    return res.status(201).json(successResponse);
  } catch (error) {
    console.log(error);

    errorResponse.error = error.message;
    errorResponse.message = "Something went wrong";
    return res.status(501).json(errorResponse);
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const response = await movieModel.deleteOne({
      _id: req.params.id,
    });

    if (!response) {
      errorResponse.message =
        "Unable to delete this movie or the movie is not found";
      return res.status(501).json(errorResponse);
    }

    successResponse.data = response;
    successResponse.message = "Successfully deleted the movie details";
    return res.status(201).json(successResponse);
  } catch (error) {
    console.log(error);
    errorResponse.error = error.message;
    errorResponse.message = "Something went wrong,Try again";
    return res.status(501).json(errorResponse);
  }
};

export const editMovieDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const updateOption = req.body; // This is a json object
    const updateRes = await movieModel.findByIdAndUpdate(id, updateOption, {
      new: true,
    }); // {new : true}  give me new movie details after update data

    if (!updateRes) {
      errorResponse.message = "Unable for update the movie details";
      return res.status(501).json(errorResponse);
    }

    successResponse.data = updateRes;
    successResponse.message = "Successfully update movie details";
    return res.status(201).json(successResponse);
  } catch (error) {
    console.log(error);
    errorResponse.error = error.message;
    errorResponse.message = "something went wrong while updating movie details";
    return res.status(501).json(errorResponse);
  }
};
