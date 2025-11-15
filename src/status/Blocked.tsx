import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Blocked() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-12 h-12 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Blocked</h1>
          <p className="text-gray-600">
            Your account has been temporarily blocked.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
          <p className="text-sm text-gray-700 mb-2">
            <strong>Account Status:</strong> Blocked
          </p>
          {user && (
            <p className="text-sm text-gray-700">
              <strong>Email:</strong> {user.email}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <div className="text-sm text-gray-600">
            <p className="mb-2">
              If you believe this is an error or have questions about your account status, please contact our support team.
            </p>
            <p>
              We're here to help resolve any issues and get you back on the road.
            </p>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm font-medium text-gray-700 mb-3">Contact Support:</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Email: support@nexcab.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Hours: Monday - Friday, 9 AM - 6 PM</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <Link
              to="/contact"
              className="w-full bg-[#008C99] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#007580] transition"
            >
              Contact Support
            </Link>
            <button
              onClick={logout}
              className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

