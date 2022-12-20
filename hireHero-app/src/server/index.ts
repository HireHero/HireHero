import path from 'path';
import userApi from './routes/userApi'; /* userApi */
import interviewApi from './routes/interviewApi'; /* interviewApi */
import authApi from './routes/authApi'; /* authApi */

/* import Express and its types */

import express, {
  json,
  urlencoded,
  Request,
  Response,
  NextFunction,
} from 'express';

/* initialize express */

const app = express();

/* setup the PORT */

const port = 3000;


/* handles the parsing of the request bodies */

app.use(json());
app.use(urlencoded({ extended: true }));


/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, "../../dist")));

//define route handlers


// route for all Postgres Interview Requests

app.use('/api/user', userApi);
app.use('/api/interviews', interviewApi);
app.use('/api/auth', authApi);


// Catch-all route handler

app.use('*', (req: Request, res: Response) => {

  res.sendStatus(404);

});

/* Global Error Handler */

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
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
