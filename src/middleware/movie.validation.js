async function movieValidation(req,res,next){
      //destructure the json data
      const {name , description, cast , trailerUrl , language, director , releaseStatus} = req.body;

      if(!name || !description || !cast || !trailerUrl || !language || !director || !releaseStatus){
          return res.status(401).json({success:false, error:{} , message :"All fields are mandatory"}); 
      };

      next();
}
export default movieValidation;