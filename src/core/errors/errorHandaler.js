import AppError from "./AppError.js";
const errorHandler= (err, req, res, next)=>{
    let error = err;
    if(!error instanceof AppError){
        error = new AppError(
            error.message || 'Internal Server Error',
            error.statusCode || 500
        );
    }
    res.status(error.statusCode).json({
        success : false,
        message : error.message
    });
};
export default errorHandler;