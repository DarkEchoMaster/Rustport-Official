import { Router } from "express";
import requireAuth from "../middleware/requireAuth.js";
import { listingCheckout, cancelRenewal } from "../controllers/paymentController.js";
const r=Router();
r.post("/listing-checkout",requireAuth,listingCheckout);
r.post("/:serverId/cancel-renewal",requireAuth,cancelRenewal);
export default r;
