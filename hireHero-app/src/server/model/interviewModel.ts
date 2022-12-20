const { Pool } = require('pg');

/* import Express and its types */


import express, {
  json,
  urlencoded,
  Request,
  Response,
  NextFunction,
} from 'express';


// URI for Elephant SQL (If not using this one then you will need to manually setup some tables for everything to work)
const PG_URI = 'postgres://qoewcqtp:zbJbMieoG08RobHp3xgRukVNMQ7NuQ9v@chunee.db.elephantsql.com/qoewcqtp';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {

  query: (text: string, params?: Array<string>, callback?: any) => {

    console.log('executed query', text);

    return pool.query(text, params, callback);
    
  }
  
};