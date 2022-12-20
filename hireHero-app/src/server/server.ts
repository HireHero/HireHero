import path from 'path';

import metricAPI from './routes/interviewApi'; /* interviewApi */

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

// route for all Postgres Interview Requests

app.use('/api/user', userApi);
app.use('/api/interviews', interviewApi);
app.use('/api/auth', authApi);

// serves static files in production mode

/* if (process.env.NODE_ENV === 'production') {

  app.use('/build', express.static(path.join(__dirname, '../build')));

  app.get('/*', (req, res) => {

    return res
      .status(200)
      .sendFile(path.join(__dirname, '../build/index.html'));
      
  });
} */

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