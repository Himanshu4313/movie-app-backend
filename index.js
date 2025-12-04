import app from './src/app.js';
import connectDatabase from './src/config/connect.database.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
       //connect database 
       connectDatabase();
       console.log(`Server is listen at port ${PORT}`);       
});
