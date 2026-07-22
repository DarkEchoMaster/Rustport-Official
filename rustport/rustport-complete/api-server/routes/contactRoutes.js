import {Router} from "express"; import {create} from "../controllers/contactController.js"; const r=Router();r.post("/",create);export default r;
