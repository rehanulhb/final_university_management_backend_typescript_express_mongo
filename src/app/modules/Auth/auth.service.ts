import { TLoginUser } from "./auth.interface";

const loginUser = async (payload: TLoginUser) => {
    console.log(payload)
  // checking if the user is exist
  
};


export const AuthServices = {
  loginUser,
  
};