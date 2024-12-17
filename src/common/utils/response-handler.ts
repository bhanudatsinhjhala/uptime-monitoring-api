export class ResponseHandler {
  public static success<T>(message: string, statusCode: number, data?: T) {
    return {
      status: true,
      statusCode,
      message,
      data,
      error: [],
    };
  }

  public static error<T>(message: string, statusCode: number, error?: T) {
    return {
      status: true,
      statusCode,
      message,
      data: [],
      error: error || [],
    };
  }
}
