export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface LoginResponse {
  user: {
    _id: string;
    name: string;
    email: string;
    role: 'rider' | 'driver' | 'admin';
    status: 'active' | 'blocked' | 'suspended';
  };
  token: string;
}

export interface RegisterResponse {
  user: {
    _id: string;
    name: string;
    email: string;
    role: 'rider' | 'driver';
  };
  token: string;
}

export interface ErrorResponse {
  success: false;
  message: string;
  error?: string;
  errors?: {
    field: string;
    message: string;
  }[];
}

