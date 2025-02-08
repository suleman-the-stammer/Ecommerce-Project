import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import User from "../../models/User"

export const registerController = ()=>{
  const {userName , email , password } = req.body;
  
}