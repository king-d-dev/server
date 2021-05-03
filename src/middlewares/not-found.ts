import { RequestHandler } from 'express';
import { NotFoundError } from '../errors/not-found-error';

const notFoundHandler: RequestHandler = (req, res, next) => {
  throw new NotFoundError();
};

export { notFoundHandler };
