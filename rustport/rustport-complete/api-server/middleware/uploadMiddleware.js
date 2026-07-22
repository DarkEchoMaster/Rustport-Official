import multer from "multer"; import path from "path";
const storage=multer.diskStorage({destination:(req,file,done)=>done(null,"uploads/messages"),filename:(req,file,done)=>done(null,`${Date.now()}-${Math.random().toString(36).slice(2)}${path.extname(file.originalname)}`)});
export const upload=multer({storage,limits:{fileSize:8*1024*1024}});
