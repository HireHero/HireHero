import { RequestHandler } from 'express';

// import db from '../model/interviewModel';
const db = require('../model/interviewModel');

type InterviewController = {
  getInterviews: RequestHandler;
  createInterview: RequestHandler;
  updateInterview: RequestHandler;
  deleteInterview: RequestHandler;
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

const interviewController: InterviewController = {


// GET ALL INTERVIEWS FOR A USER
  getInterviews: async (req: Request, res: Response, next: NextFunction ) => {

    const username = req.cookies.token;
    const queryString = 
    `SELECT * FROM user_data WHERE username = ${username};`;

    db.query(queryString)

    .then((result: resultObj) => { // how to type these when method chaining
      res.locals.allInterviews = result.rows;
      return next();
    })

    .catch((err: any) => { // how to type these when method chaining
      return next(err);
    });
    
  },

// CREATE A NEW INTERVIEW FOR A USER
  createInterview: async (req: Request, res: Response, next: NextFunction ) => {

    const queryString = 
    `INSERT into user_data(username, company_applied, position_applied, date_applied, date_of_interview, 
      time_of_interview, notes_for_interview, notes_from_interview, thankyou_note_sent, interview_status, interview_id) VALUES 
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *;`;

    const interviewDetails = [
      req.cookies.token, // creating new interview with cookie as username
      req.body.company_applied, 
      req.body.position_applied, 
      req.body.date_applied, 
      req.body.date_of_interview, 
      req.body.time_of_interview, 
      req.body.notes_for_interview, 
      req.body.notes_from_interview, 
      req.body.thankyou_note_sent, 
      req.body.interview_status, 
      req.body.interview_id, // creating new interview with unique interview ID
    ] ;
    
    db.query(queryString, interviewDetails, (err: Error, result: Response) => {
      if(err) return next(err);

      res.locals.newInterview = req.body.interview_id; // return the interview id as confirmation of newly created interview

      return next();
    })

  },

// UPDATE AN INTERVIEW FOR A USER
  updateInterview: async (req: Request, res: Response, next: NextFunction ) => {
    const username = req.cookies.token;
    const interview_id = req.body.interview_id;

    const body = [
      // req.cookies.token,
      req.body.company_applied, 
      req.body.position_applied, 
      req.body.date_applied, 
      req.body.date_of_interview, 
      req.body.time_of_interview, 
      req.body.notes_for_interview, 
      req.body.notes_from_interview, 
      req.body.thankyou_note_sent, 
      req.body.interview_status, 
      // req.body.interview_id,
    ];

    // may have to write logic to handle if not all fields are being updated, depends on how front is set up to handle updates

    const queryString = 
    `INSERT INTO user_data(company_applied, position_applied, date_applied, date_of_interview, 
    time_of_interview, notes_for_interview, notes_from_interview, thankyou_note_sent, interview_status) 
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) 
    WHERE username = username AND interview_id = interview_id;`;

    db.query(queryString, body, (err: Error, result: Response) => {
      if(err) return next(err);

      res.locals.updatedInterview = req.body.interview_id; // return the interview id as confirmation of newly created interview

      return next();
    })


  },


  // DELETE AN INTERVIEW FOR A USER
  deleteInterview: async (req: Request, res: Response, next: NextFunction ) => {

    const username = req.cookies.token;
    const interview_id = req.body.interview_id;

    const queryString = 
    `DELETE FROM user_data WHERE username = username AND interview_id = interview_id;`;

    db.query(queryString, (err: Error, result: Response) => {

      if(err) return next(err);

      res.locals.deletedInterview = req.body.interview_id; // return the interview id as confirmation of newly created interview

      return next();
    })

  }

};

export default interviewController;