import express from 'express';
const app = express();

app.get('/',(req,res)=>{
     res.json({
        success:true,
        message:'Yes, Welcome to movie world..'
     });
});

export default app;