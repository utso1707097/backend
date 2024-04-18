import express, { NextFunction, Request, Response } from 'express'
import createHttpError, { HttpError } from 'http-errors';
import { config } from './config/config';
import globalErrorHandler from './middlewares/globalErrorHandler';

const app = express(); 

//Routes
//HTTP methods: get,post,put,patch,delete
app.get('/',(req,res)=>{

    // to check the global error handler
    // const error = createHttpError(400,"Something went wrong");
    // throw error;
    res.json({ message: "Welcome to elib apis"});
});

// Global error handler -> middleware -> always in the last of routes

// 4 params -> error, req, res, next
app.use(globalErrorHandler);


export default app;