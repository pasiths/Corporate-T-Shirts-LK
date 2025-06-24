export interface UserPayload {
  id: string | number;
  role: string;
}
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number | string;
      };
    }
  }
}
