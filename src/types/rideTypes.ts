export type RideStatus = 
  | 'pending' 
  | 'accepted' 
  | 'picked_up' 
  | 'in_transit' 
  | 'completed' 
  | 'cancelled';

export type PaymentMethod = 'cash' | 'card' | 'mobile_banking';

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

export interface Ride {
  _id: string;
  rider: {
    _id: string;
    name: string;
    phone?: string;
  };
  driver?: {
    _id: string;
    name: string;
    phone?: string;
    vehicleDetails?: {
      make: string;
      model: string;
      licensePlate: string;
    };
  };
  pickupLocation: Location;
  destinationLocation: Location;
  fare: number;
  estimatedFare?: number;
  distance?: number;
  duration?: number;
  status: RideStatus;
  paymentMethod: PaymentMethod;
  requestedAt: string;
  acceptedAt?: string;
  pickedUpAt?: string;
  completedAt?: string;
  cancelledAt?: string;
  cancellationReason?: string;
}

export interface RideRequest {
  pickupLocation: Location;
  destinationLocation: Location;
  paymentMethod: PaymentMethod;
}

export interface RideFilters {
  status?: RideStatus;
  startDate?: string;
  endDate?: string;
  minFare?: number;
  maxFare?: number;
  driverId?: string;
  riderId?: string;
}

