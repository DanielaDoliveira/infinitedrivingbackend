
import express, { NextFunction } from 'express'
import { PrismaClient } from '@prisma/client';
import { Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { router } from './routes';
const app = express();

app.use(cors());

//const route = Router()
app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error){
    //Se for uma instancia do tipo error
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  })

})




app.listen(3333, () => 'server running on port 3333')