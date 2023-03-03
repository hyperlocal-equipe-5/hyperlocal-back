export type HttpResponse<T> = {
  error: boolean;
  statusCode: number;
  message: string;
  body: T;
};
