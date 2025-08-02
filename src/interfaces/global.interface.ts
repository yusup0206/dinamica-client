import type { CenterSingle } from "./center.interface";

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface CenterApiResponse {
  center: CenterSingle;
}
