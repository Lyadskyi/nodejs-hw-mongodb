// const errorHandler = (error, req, res, next) => {
//   const status =
//     error.status && error.status >= 100 && error.status < 600
//       ? error.status
//       : 500;
//   const message = error.message || "Something went wrong";

//   res.status(status).json({
//     status,
//     message,
//   });
// };

// export default errorHandler;

const errorHandler = (error, req, res, next) => {
  const status = error.status ?? 500;
  const message = error.message || "Something went wrong";

  res.status(status).json({
    status,
    message,
  });
};

export default errorHandler;
