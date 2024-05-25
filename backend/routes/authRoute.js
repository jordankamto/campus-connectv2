import { Router } from 'express';
import {login, registration} from '../controller/authController.js'
import { isAuth } from '../middleware/isAuth.js';

const router = Router()
router.post('/signup',registration);
router.post('/login',login)

export default router