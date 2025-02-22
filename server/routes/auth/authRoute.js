import express from 'express'
import { loginController, registerController ,logoutController , authMiddleware} from "../../controllers/auth/authController.js";

const router = express.Router()

router.post('/register' , registerController);
router.post('/login' , loginController);
router.post('/logout' , logoutController);
// We need to get the status so we use 'Get' method
router.get('/check-auth' , authMiddleware, (req, res)=>{
    const user = req.user;  // moving our decode token see in controller for better understanding
    res.status(200).json({
        success: true,
        message : "Authenticated User",
        user
    })
});



export default router;