import { RequestHandler } from 'express';

const bcrypt = require('bcrypt');

// import db from '../model/interviewModel';
const db = require('../model/interviewModel');

type AuthController = {
  verifyUser: RequestHandler;
  setCookie: RequestHandler;
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
  rows?: any[] | undefined | null;
}

const authController: AuthController = {
  verifyUser: async (req: Request, res: Response, next: NextFunction) => {
    const { userName, password } = req.body;
    console.log('USER', userName);
    console.log('PASS', password);

    let hash;

    // const queryString = 'SELECT password FROM user_id WHERE username = username;';
    const queryString = 'SELECT password FROM user_creds WHERE username = $1;';
    const body = [userName];

    db.query(queryString, body, (err: Error, result: resultObj) => {
      if (err) return next(err);

      if (result.rows) {
        res.locals.username = userName;
        const pass = result.rows[0].password;
        console.log('PASS2', pass);
        if (password === pass) return next();
      }
      // hash = result.rows[0];
    });

    // console.log('hashed pw:', hash);
    // comparing attempted login password with hash password from db, will return boolean signifying match (result)
    // bcrypt.compare(password, hash, (err: Error, result: resultObj) => {
    //   if (err) return next(err);

    //   if (result) {
    //     console.log('login success');
    //     return next();
    //   } else {
    //     return next(err);
    //   }
    // });
  },

  //     const queryString1 = 'SELECT username AND password FROM user_id WHERE username = $1 AND password = $2;';
  //     const params = [username, password];
  //     db.query(queryString1, params, (err: Error, result: resultObj) => {
  //       if(err) return next(err);
  //       if(result.rows) console.log(result.rows); // for debug
  //       //Check to see if a valid match was found
  //       if(result.rows.length > 1) {
  //         res.locals.username = result.rows[0]; // created an interface for result.rows but still getting type error
  //       } else {
  //         return next(err) // invalid login
  //       };
  //       return next();
  //       })
  //  }

  // Controller to set a new cookie
  setCookie: async (req: Request, res: Response, next: NextFunction) => {
    //Check to see if a valid login request was found by verifyUser
    if (res.locals.username) {
      res.cookie('token', res.locals.username);
    }
    return next();
  },
};

export default authController;
