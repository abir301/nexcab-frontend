export type UserRole = 'rider' | 'driver' | 'admin';

export type AccountStatus = 'active' | 'blocked' | 'suspended';

export interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  status: AccountStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Rider extends User {
  role: 'rider';
  emergencyContacts?: EmergencyContact[];
}

export interface Driver extends User {
  role: 'driver';
  vehicleDetails?: VehicleDetails;
  isOnline: boolean;
  earnings?: {
    total: number;
    daily: number;
    weekly: number;
    monthly: number;
  };
}

export interface Admin extends User {
  role: 'admin';
}

export interface VehicleDetails {
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  color: string;
}

export interface EmergencyContact {
  name: string;
  phone: string;
  relationship: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

