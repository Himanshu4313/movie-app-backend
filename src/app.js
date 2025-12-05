import express, { urlencoded } from 'express';
import apiRoutes from './routes/index.js';
const app = express();

app.use(express.json()); // accept json payload data
app.use(express.urlencoded({extended:true})); // this give a permission to get url encoded data from req.

app.use('/mba/api' , apiRoutes);


app.get('/',(req,res)=>{
     res.json({
        success:true,
        message:'Yes, Welcome to movie world..'
     });
});

export default app;