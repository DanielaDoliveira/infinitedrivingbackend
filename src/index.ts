
import express, { NextFunction } from 'express'
import bodyParser from 'body-parser';
import {  Request, Response } from 'express';
import cors from 'cors';
import { router } from './routes';

const app = express();
const port = process.env.PORT ||3333
app.use(cors());

//const route = Router()
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

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




app.listen(port, () => 'server running on port 3333')