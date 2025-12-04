import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{
     return res.json({
        success:true,
        message:"Movie booking application routes work!"
     })
});

export default router;