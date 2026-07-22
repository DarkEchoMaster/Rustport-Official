import {stripe} from "../config/stripe.js";
export async function createCheckout({mode="payment",line_items,success_url,cancel_url,metadata}){if(!stripe)return {checkoutUrl:null,demo:true};const session=await stripe.checkout.sessions.create({mode,line_items,success_url,cancel_url,metadata});return {checkoutUrl:session.url};}
