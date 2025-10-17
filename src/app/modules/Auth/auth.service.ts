import status from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from 'bcrypt';

const loginUser = async (payload: TLoginUser) => {

  // checking if the user is exist

const user =  await User.isUserExistsByCustomId(payload.id)
if(!user){
    throw new AppError(status.NOT_FOUND, 'This user is not found!');
}

//Checking if the user is already deleted

const isDeleted = user?.isDeleted;

if(isDeleted){
    throw new AppError(status.FORBIDDEN, 'This user is deleted!');
}

// //Check if the user is blocked
const userStatus = user?.status;

if(userStatus === 'blocked'){
    throw new AppError(status.FORBIDDEN, 'This user is blocked!');
}

//Checking if the password is correct
if(! (await User.isPasswordMatched(payload?.password, user?.password))){
    throw new AppError(status.FORBIDDEN, 'Password do not matched!');
}




//Access Granted: Send AccessToken, RefreshToken





  return {};
  
};


export const AuthServices = {
  loginUser,
  
};