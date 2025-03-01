import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js';


export const registerController = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.json({
        success: false,
        message: "User Already Exists",
      })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    let newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: 'Registration Successful',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Error Occurred in Registration',
    });
  }
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.json({
        success: false,
        message: "User Not Exists",
      })
    }
    const isMatch = await bcrypt.compare(password, checkUser.password);
    if (!isMatch) {
     return res.json({
        success: false,
        message: "Incorrect Password Here",
      })
    }
    const token = jwt.sign({
      id: checkUser._id, role: checkUser.role, email: checkUser.email
    }, 'My_Secret_Key', { expiresIn: '1h' });

    res.cookie('token', token, {
       httpOnly: true, secure: false , 
      sameSite: 'strict' }).json({
      success: true,
      message: 'Logged in Successfully ',
      user: {
        email: checkUser.email,
        id: checkUser._id,
        role: checkUser.role

      }
    })
  }
  catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "There's an Sign In error. Please try again",
    });
  }
};
// Logout Controller
export const logoutController = async (req, res) =>{
  res.clearCookie('token').json({
    success: true,
    message : "Logout Successfully"
  })
}
// Auth MiddleWare
export const authMiddleware = async(req, res , next )=>{
  const token = req.cookies.token;
  if(!token){
    return res.status(401).json({
      success: false,
      message : "Unauthorized User"
    })
  }
  try {
    // First we Decode the token using our secret key
    const decode = jwt.verify(token , 'My_Secret_Key');
    req.user = decode;
    next();
  } catch (error) {
    console.log(error)
    res.status(401).json({
      success: false,
      message : "Unauthorized User"
    })
  }
}
