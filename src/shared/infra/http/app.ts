import 'reflect-metadata';
import express, { NextFunction, Request, Response } from "express";
import 'express-async-errors'
import { router } from "./routes";
import swaggerUi from "swagger-ui-express"
import swaggerFile from "../../../swagger.json"
import '../../container'
import { AppError } from '../../errors/AppError';
var logger = require('morgan');
import cors from 'cors'

require('dotenv').config()

const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        })
    }
    return res.status(500).json({
        status: "Error",
        message: `Internal server error - ${err.message}`
    })
})

export { app }