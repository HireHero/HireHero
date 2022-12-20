import { RequestHandler } from 'express';

const bcrypt = require('bcrypt');
const saltRound = 10;

// import db from '../model/interviewModel';
const db = require('../model/interviewModel');

type UserController = {
  createUser: RequestHandler;
};

/* import Express and its types */
import express, {
  json,
  urlencoded,
  Request,
  Response,
  NextFunction,
} from 'express';

interface resultObj {
  rows?: any[] 
};

// Create a new user and add them to the username database

const userController: UserController = {

  createUser: async (req: Request, res: Response, next: NextFunction ) => {

    const queryString = 'Insert into user_data(user_id, username, password) VALUES ($1, $2, $3) RETURNING *;';


// takes password and salt and returns a hashed pw
    bcrypt.hash(req.body.password, saltRound, (error: any, hash: string) => {
      if(error) {// if there's an error hashing the pw return err msg 500
        res.send({ success: false, statusCode: 500, message: 'Error salting password: ' + error })
      } else { // otherwise assign hash to req.body.password
        req.body.password = hash;
      }
    })

    const createUserDetails = [
      req.body.user_id,
      req.body.username,
      req.body.password // uses the reassigned hash pw
    ];

    db.query(queryString, createUserDetails, (err: Error, result: Response) => {
      if(err) return next(err);
      res.locals.username = req.body.username;
      return next();
    })


  }  

};

export default userController;