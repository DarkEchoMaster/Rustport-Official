export default function adminOnly(req,res,next){const u=req.user||req.session?.demoUser;if(u?.role==="admin")return next();res.status(403).json({message:"Administrator access is required."});}
