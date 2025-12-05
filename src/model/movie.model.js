import mongoose from "mongoose";

const schema = mongoose.Schema;

 const movieSchema = new schema({
     name:{
        type:String,
        required:true,
     },
     description:{
        type:String,
        required:true,
     },
     cast:{
        type:[String],
        required:true,
     },
     trailerUrl:{
        type:String,
        required:true
     },
     language:{
        type:String,
        required:true,
        default:"English"
     },
     director:{
        type:String,
        required:true,
     },
     releaseStatus:{
        type:String,
        required:true,
        default:"Released"
     }
 },{timestamps:true});

 const movieModel = mongoose.model('movies',movieSchema);

export default movieModel;