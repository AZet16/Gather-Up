//handling error for when accessing route that doesn't exist
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(4000);
  next(error);
};

//handles general errors and based on code will provide a structured description of the error
const errorHandler = (req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
    //need NODE_ENV to avoid this handler if the app is in productio form
  });
};

export { notFound, errorHandler };
