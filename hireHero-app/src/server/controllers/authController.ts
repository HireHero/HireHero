import { RequestHandler } from 'express';

type AuthController = {
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

const authController: AuthController = {

}



export default authController;