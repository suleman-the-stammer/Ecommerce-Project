import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js';

export const registerController = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const checkUser = await User.findOne({email});
    if (checkUser) {
     return  res.json({
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
  const {email, password } = req.body;
  try {
    const checkUser = await User.findOne({email});
    if (!checkUser) {
     return  res.json({
        success: false,
        message: "User Not Exists",
      })
    }
    const userMatch = bcrypt.compare(password , checkUser.password);
    if (!userMatch) {
      res.json({
        success:false,
        message: "Incorrect Password"
      })
    }
   const token = jwt.sign({
    id: checkUser._id , role: checkUser.role, email:checkUser.email
   }, 'My_Secret_Key' , {expiresIn : '60m'});
   res.cookie('token' , token , {httpOnly: true , secure:false }).json({
    success: true,
    message: 'Logged in Successfully ',
    user: {
      email: checkUser.email,
      id: checkUser._id , 
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

