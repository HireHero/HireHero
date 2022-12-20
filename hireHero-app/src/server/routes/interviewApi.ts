import { Router } from 'express';

const router = Router();

/* import Express and its types */
import express, {
    json,
    urlencoded,
    Request,
    Response,
    NextFunction,
  } from 'express';


import interviewController from '../controllers/interviewController';

// get all interviews
// router.get( '/', interviewController.getInterviews, (req: Request, res: Response) => {

//     console.log(res.locals);

//     return res.status(200).json(res.locals.allInterviews);

//   }
// );

// get all interviews
router.get( '/', interviewController.getInterviews, (req: Request, res: Response) => {

    console.log(res.locals);

    return res.status(200).json(res.locals.allInterviews);

  }
);

// add an interview
router.post( '/', interviewController.createInterview, (req: Request, res: Response) => {

  console.log(res.locals);

  return res.status(200).json(res.locals.newInterview);

}
);

// update an interview
router.patch( '/:id', interviewController.updateInterview, (req: Request, res: Response) => {

  console.log(res.locals);

    return res.status(200).json(res.locals.updatedInterview);
  }
);

// delete an interview
router.delete( '/:id', interviewController.deleteInterview, (req: Request, res: Response) => {

  console.log(res.locals);

    return res.status(200).json(res.locals.deletedInterview);
  }
);

export default router;