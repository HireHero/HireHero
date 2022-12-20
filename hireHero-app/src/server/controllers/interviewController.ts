import { RequestHandler } from 'express';

type InterviewController = {
  queryTimes: RequestHandler;
  numOfRows: RequestHandler;
  topCalls: RequestHandler;
  dbStats: RequestHandler;
  cacheHitRatio: RequestHandler;
};
type queryData = {
  all: any[];
  mean: number;
  median: number;
  slowestQueries: any[];
} | null;

const interviewController: InterviewController = {

}



export default interviewController;