import { Router } from 'express';

/* import Express and its types */

import express, {
    json,
    urlencoded,
    Request,
    Response,
    NextFunction,
  } from 'express';


import authController from '../controllers/authController';

const router = Router();


// check the user's login credentials and if valid then assign a cookie to them and sign-in

router.post(

  '/',

  // authController.verifyUser, authController.setCookie,

  
  (req: Request, res: Response) => {

    console.log(res.locals.username);

    return res.status(200).json(res.locals.username);

  }
);


export default router;