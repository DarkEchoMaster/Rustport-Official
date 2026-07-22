import {createCheckout} from "../services/stripeService.js";
export const listingCheckout=async(req,res)=>res.json(await createCheckout({mode:"payment",line_items:[],success_url:`${process.env.FRONTEND_URL}/my-servers?payment=success`,cancel_url:`${process.env.FRONTEND_URL}/add-server`,metadata:req.body}));
export const cancelRenewal=(req,res)=>res.json({canceled:true,activeUntil:new Date(Date.now()+20*86400000).toISOString()});
export const webhook=(req,res)=>res.json({received:true});
