export default function requireAuth(req,res,next){if(req.isAuthenticated?.()||req.session?.demoUser)return next();res.status(401).json({message:"Sign in with Steam to continue."});}
