import express from 'express';
import adminRoute from './admin.route.js';
import AuthRoutes from './auth.route.js';

const router = express.Router()

router.use('/auth', AuthRoutes)
router.use('/admin', adminRoute)

const routes = router
export default routes