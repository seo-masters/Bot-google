import  Express  from "express";
import consult from "../../controllers/BotControllers.js"
const router=Express.Router();




router.post("/",consult.getInfPaymet);

export default router;

