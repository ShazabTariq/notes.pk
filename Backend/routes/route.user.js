import express from 'express';
import {Signup, Login} from "../controller/controller.user.js";




const router = express.Router();


router.post("/saveuser", Signup);
router.post("/getuser", Login);


export default router;