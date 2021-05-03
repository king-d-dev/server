import { ErrorResponse } from '../types';

export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
  }

  abstract format(): ErrorResponse;
}
