import movieModel from '../model/movie.model.js';

export const createMovie = async (req,res) =>{
         try {
           const newMovie = await movieModel.create(req.body); // req.body its contain json type data.
           if(!newMovie){
                return res.status(501).json({
                    success:false,
                    data:{},
                    error:"Something went wrong while creating a movie"
                });
           };

           return res.status(201).json({
                  success:true,
                  error:{},
                  data:newMovie,
                  message:"Successfully creating movie"
           });
         }catch (error) {
            return res.status(501).json({
                   success:false,
                   data:{},
                   error:error.message
            });
         }  
};

