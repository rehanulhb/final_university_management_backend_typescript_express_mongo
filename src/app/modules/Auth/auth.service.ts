import status from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from 'bcrypt';

const loginUser = async (payload: TLoginUser) => {

  // checking if the user is exist
const isUserExists = await User.findOne({id: payload?.id})

if(!isUserExists){
    throw new AppError(status.NOT_FOUND, 'This user is not found!');
}

//Checking if the user is already deleted

const isDeleted = isUserExists?.isDeleted;

if(isDeleted){
    throw new AppError(status.FORBIDDEN, 'This user is deleted!');
}

//Check if the user is blocked
const userStatus = isUserExists?.status;

if(userStatus === 'blocked'){
    throw new AppError(status.FORBIDDEN, 'This user is blocked!');
}

//Checking if the password is correct
const isPasswordMatched = await bcrypt.compare(payload?.password, isUserExists.password)
console.log(isPasswordMatched)



//Access Granted: Send AccessToken, RefreshToken





  return {};
  
};


export const AuthServices = {
  loginUser,
  
};