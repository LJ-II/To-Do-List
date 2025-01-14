export function createError(statusCode, message)
{
    const error = new Error();
    error.message = message;
    error.statusCode = statusCode;
    return error;
}