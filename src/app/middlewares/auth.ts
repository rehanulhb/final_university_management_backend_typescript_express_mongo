import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import status from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';

const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    //if the token is sent from the client
    if (!token) {
      throw new AppError(status.UNAUTHORIZED, 'You are not authorized!');
    }

    // Check if the token is valid
    jwt.verify(
      token,
      config.jwt_access_secret as string,
      function (err, decoded) {
        if (err) {
          throw new AppError(status.UNAUTHORIZED, 'You are not authorized!');
        }
        //

        req.user = decoded as JwtPayload;
        next();
      },
    );
  });
};

export default auth;
