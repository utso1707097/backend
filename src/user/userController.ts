import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

const createUser = async(req:Request,res:Response,next:NextFunction) => {
    // console.log(req.body);
    // return res.json({});
    //request steps
    // validation
    const {name,email, password} = req.body;
    if(!name || !email || !password){
        const error = createHttpError(400, "All fields are required");
        return next(error); //global error handler
    }
    // process
    // response
    res.json({message: "User created"});
};

export {createUser};