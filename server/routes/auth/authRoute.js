import { Router } from "express";
import { registerController } from "../../controllers/auth/authController";

const router = express.Router()

router.post('/register' , registerController)


module.exports = router;