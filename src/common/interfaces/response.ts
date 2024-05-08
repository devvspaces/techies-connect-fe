export interface FieldError {
  [key: string]: string[];
}

export interface SuccessResponse<T> {
  success: boolean;
  message: string;
  data: T | undefined;
  path: string;
}

export interface PaginatedResponse<T> {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  data: T[];
}
