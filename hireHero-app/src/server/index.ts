import path from 'path';

import userApi from './routes/userApi'; /* userApi */
import interviewApi from './routes/interviewApi'; /* interviewApi */
import authApi from './routes/authApi'; /* authApi */

import cookieParser from 'cookie-parser';

/* import Express and its types */
import express, {
  Express,
  json,
  urlencoded,
  Request,
  Response,
  NextFunction,
  RequestHandler,
  ErrorRequestHandler
} from 'express';

/* initialize express */
const app: Express = express();

/* setup the PORT */
const port = 3000;

// Parse cookies
app.use(cookieParser());

// handles the parsing of the request bodies */
app.use(json());
app.use(urlencoded({ extended: true }) as RequestHandler);

// handle requests for static files
app.use(express.static(path.resolve(__dirname, "../../dist")));

//define route handlers
app.use('/api/signup', userApi);
app.use('/api/interviews', interviewApi);
app.use('/api/login', authApi);


// Catch-all route handler
app.use('*', (req: Request, res: Response) => {

  return res.sendStatus(404);

});



/* Global Error Handler */
app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { Error: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultError, err);
  return res.status(errorObj.status).json(errorObj.message);
});



/* start the server */
const server = app.listen(port, () => {
  console.log(`Server started on Port: ${port}`);
});



/* export the server */
module.exports = server;
