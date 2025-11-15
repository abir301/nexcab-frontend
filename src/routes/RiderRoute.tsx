import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { ReactNode } from 'react';

interface RiderRouteProps {
  children: ReactNode;
}

export function RiderRoute({ children }: RiderRouteProps) {
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

  if (user?.role !== 'rider') {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

