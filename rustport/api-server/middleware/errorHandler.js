export default function errorHandler(error,req,res,next){console.error(error);res.status(error.status||500).json({message:error.publicMessage||"Rustport could not complete that request."});}
