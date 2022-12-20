import { Router } from 'express';

/* import Express and its types */

import express, {
    json,
    urlencoded,
    Request,
    Response,
    NextFunction,
  } from 'express';


import userController from '../controllers/userController';

const router = Router();


// Create a new user and add them to the database
// necessary data is passed in through the req body

router.post(

  '/',

  userController.createUser, userController.createUserInterviews,

  
  (req: Request, res: Response) => {

    console.log(res.locals.user);

    return res.status(200).json(res.locals.user);

  }
);

// Get all the interviews a user has registered

router.get(
  '/',

  userController.getUserInterviews,

  
  (req: Request, res: Response) => {

    console.log(res.locals.allInterviews);

    return res.status(200).json(res.locals.allInterviews);

  }
);

// Update theuser's inetrviews by adding a new interview
// will pass the user id via req. body

router.patch(
  '/:',

  userController.updateUserInterview,

  
  (req: Request, res: Response) => {

    return res.status(200).json(res.locals.updatedInterview);
  }
);

// delete an interview from the user;s account
// will pass in user's ID via the req body

router.delete(
  '/',

  userController.deleteInterview,

  
  (req: Request, res: Response) => {

    return res.status(200).json(res.locals.deletedInterview);
  }
);

export default router;