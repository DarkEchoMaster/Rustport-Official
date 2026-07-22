import {Router} from "express"; import * as c from "../controllers/blogController.js"; import adminOnly from "../middleware/adminOnly.js";
const r=Router();r.get("/",c.list);r.get("/:slug",c.one);r.post("/",adminOnly,c.create);r.delete("/:id",adminOnly,c.remove);export default r;
