import Router from 'express'
import { registerAuth,loginAuth } from '../controllers/AuthController';

const router = Router();

router.post("/register",registerAuth)
router.post("/login",loginAuth)

export default router;