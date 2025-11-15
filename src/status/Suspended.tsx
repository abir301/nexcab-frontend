import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Suspended() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-12 h-12 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Suspended</h1>
          <p className="text-gray-600">
            Your account has been temporarily suspended.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-left">
          <p className="text-sm text-gray-700 mb-2">
            <strong>Account Status:</strong> Suspended
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
              Your account access has been temporarily restricted. This may be due to policy violations or security concerns.
            </p>
            <p>
              Please contact our support team to review your account and discuss reinstatement options.
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

