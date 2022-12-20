import { RequestHandler } from 'express';

type UserController = {
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

const userController: UserController = {

}



export default userController;