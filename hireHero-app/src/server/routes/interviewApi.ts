import { Router } from 'express';

/* import Express and its types */

import express, {
    json,
    urlencoded,
    Request,
    Response,
    NextFunction,
  } from 'express';


import interviewController from '../controllers/interviewController';

const router = Router();

// 

// 

router.get(

  '/',

  // interviewController.getInterview,

  
  (req: Request, res: Response) => {

    console.log(res.locals);
    return res.status(200).json(res.locals.allInterviews);

  }
);


router.post(
  '/',

  // interviewController.addInterview,

  
  (req: Request, res: Response) => {

    console.log(res.locals);
    return res.status(200).json(res.addedInterview);

  }
);

// delivers metrics from database
// notice: the database controllers will console log, but not return errors so that individual charts can render

router.patch(
  '/:id',

  // interviewController.updateInterview,

  
  (req: Request, res: Response) => {

    return res.status(200).json(res.locals.updatedInterview);
  }
);

// this should reflect any method that would need to update based on user input
// WIP: not currently in use but ready to be connected to front end based on user selection

router.delete(
  '/:id',

  // interviewController.deleteInterview,

  
  (req: Request, res: Response) => {

    return res.status(200).json(res.locals.deletedInterview);
  }
);

export default router;