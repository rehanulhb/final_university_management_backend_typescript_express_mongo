import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { ZodObject } from 'zod';

const router = express.Router();

const validateRequest = (schema : ZodObject) => {
return async(req: Request, res: Response, next: NextFunction) =>{
    //Validation
    const zodParsedData = await schema.parseAsync({
        {
            body: req.body;
        }
    });




    next();
}
};
//Will Call controller Function
router.post('/create-student',validateRequest('validateRequest'), UserControllers.createStudent);

export const UserRoutes = router;
