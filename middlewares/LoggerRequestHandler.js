import logger from "../utils/Logger.js";

const LoggerRequestHandler = (req, res, next) => {
  logger.http(`${req.method} ${req.originalUrl}`);
  next();
};

export default LoggerRequestHandler;
