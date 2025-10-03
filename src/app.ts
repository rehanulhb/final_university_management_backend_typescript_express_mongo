import type { Application, NextFunction, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

app.use(express.json());
app.use(cors());

//Applications Routes
app.use('/api/v1', router);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// });

const test = async(req: Request, res: Response)=>{
  const a=10;
  res.send(a);
};

app.get('/', test)

app.use(globalErrorHandler);

//Not FOund
app.use(notFound);

export default app;
