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

    const queryString = 'Insert into user_creds(username, password) VALUES ($1, $2);';

    let hashedPw;


    // takes password and salt and returns a hashed pw
    // bcrypt.hash(req.body.password, saltRound, (error: any, hash: string) => {
    //   if(error) {// if there's an error hashing the pw return err msg 500
    //     res.send({ success: false, statusCode: 500, message: 'Error salting password: ' + error })
    //   } else { // otherwise assign hash to req.body.password
    //     // req.body.password = hash;
    //     hashedPw = hash;
    //   }

    // })

    const createUserDetails = [
      // req.body.user_id, // auto-adds increments in SQL
      req.body.userName,
      req.body.password // hashedPw // uses the reassigned hash pw
    ];

    // db.query(queryString, createUserDetails, (err: Error, result: Response) => {
      
    //   if(err) return next({log: err, message: {Error: err}});
    //   res.locals.username = req.body.username;
    //   return next();
    // })


    db.query(queryString, createUserDetails)
    .then((data: any) => {
      res.locals.username = req.body.userName;
      return next();
    })
    .catch((err: any) => {
      return next({log: err, message: {Error: err}});
    })

  }

};

export default userController;