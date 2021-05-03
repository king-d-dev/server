import * as z from 'zod';
import { ErrorRequestHandler } from 'express';
import { CustomError } from '../errors/custom-error';
import { ErrorResponse } from '../types';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.format() });
  }

  if (err instanceof z.ZodError) {
    console.log(err.errors);

    const errors: ErrorResponse = [];
    for (const error of err.errors) {
      const field: string = error.path.join('.');
      errors.push({ field, message: error.message });
    }

    return res.status(400).send({ errors });
  }

  console.log(err);
  const errors: ErrorResponse = [{ message: 'Request failed' }];
  res.status(500).send({ errors });
};

export { errorHandler };
