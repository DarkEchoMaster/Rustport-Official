import {Router} from "express"; import {profile} from "../controllers/steamController.js"; const r=Router();r.get("/profile",profile);export default r;
