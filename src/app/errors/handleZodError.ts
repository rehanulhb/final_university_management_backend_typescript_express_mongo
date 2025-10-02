import { ZodError } from "zod";
import { TErrorSources } from "../interface/error";

  const handleZodError =(err: ZodError) =>{

    //This Error Needs to Fix from 14-3, where in the latest version there are no Issues in Postman showing

  const errorSources: TErrorSources = err.issues.map((issue: ZodIssue)=>{
    return {
      path: issue?.path[issue.path.length-1],
      message: issue.message,
    }
  })
   const statusCode = 400;

   return {
    statusCode,
    message: 'Validation Error',
    errorSources,
   }
  }

  export default handleZodError;