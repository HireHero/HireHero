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

import userController from '../controllers/userController';

// Create a new user and add them to the database
// necessary data is passed in through the req body

router.post('/', userController.createUser, (req: Request, res: Response) => {
  console.log(res.locals.user);

  return res.status(200).json(res.locals.username);
  /* can also auto-login after account created and route to main, 
    but wouuld need to add verify and set cookie mddleware */
});

export default router;
