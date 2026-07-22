export const profile=(req,res)=>res.json({profile:req.user||null});
