export enum ErrorCode {
  INTERNAL_EXCEPTION = 100,
  USER_ALREADY_EXISTS = 101,
  INVALID_CREDENTIALS = 102,
  UNAUTHORIZED = 103,
  INVALID_PRODUCT_ID = 104,
  PRODUCT_NOT_FOUND = 105,
  NO_CHANGES_DETECTED = 106,
}

export class HttpException extends Error {
  message: string;
  errorCode: ErrorCode;
  statusCode: number;
  errors: any;

  constructor(
    message: string,
    errorCode: ErrorCode,
    statusCode: number,
    error: any
  ) {
    super(message);
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.errors = error;
  }
}
