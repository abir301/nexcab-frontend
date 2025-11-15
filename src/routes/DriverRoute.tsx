import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { ReactNode } from 'react';

interface DriverRouteProps {
  children: ReactNode;
}

export function DriverRoute({ children }: DriverRouteProps) {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-[#008C99] text-lg">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.status === 'blocked' || user?.status === 'suspended') {
    return <Navigate to={`/status/${user.status}`} replace />;
  }

  if (user?.role !== 'driver') {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

