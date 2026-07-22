export const me=(req,res)=>res.json({user:req.user||req.session?.demoUser||null});
export const logout=(req,res,next)=>req.logout?req.logout(err=>err?next(err):req.session.destroy(()=>res.json({ok:true}))):req.session.destroy(()=>res.json({ok:true}));
export const demoLogin=(req,res)=>{req.session.demoUser={steamId:"76561198000000000",displayName:"Rustport Demo",avatar:"https://avatars.cloudflare.steamstatic.com/0000000000000000000000000000000000000000_full.jpg",role:req.query.admin==="1"?"admin":"user"};res.redirect(process.env.FRONTEND_URL||"http://localhost:5173");};
