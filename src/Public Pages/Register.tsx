import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

type RegisterFormData = {
    name: string;
    email: string;
    userType: "rider" | "driver";
    password: string;
};

export function Register() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>();

    const onSubmit = (data: RegisterFormData) => {
        console.log("Form submitted:", data);
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center h-[700px] bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 my-3">Full Name</label>
                        <input
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 2,
                                    message: "Name must be at least 2 characters",
                                },
                            })}
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full border p-2 border-[#008C99] rounded-md focus:outline-none focus:ring-2 focus:ring-[#008C99]"
                        />
                        {errors.name && (
                            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 my-3">Email</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                    message: "Invalid email format",
                                },
                            })}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border p-2 border-[#008C99] rounded-md focus:outline-none focus:ring-2 focus:ring-[#008C99]"
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 my-3">Role</label>
                        <select
                            {...register("userType", {
                                required: "Please select user type",
                            })}
                            defaultValue=""
                            className="w-full border p-2 border-[#008C99] rounded-md focus:outline-none focus:ring-2 focus:ring-[#008C99]"
                        >
                            <option value="" disabled className="text-gray-400">Select role</option>
                            <option value="rider" className="text-black">Rider</option>
                            <option value="driver" className="text-black">Driver</option>
                        </select>
                        {errors.userType && (
                            <p className="text-sm text-red-500 mt-1">{errors.userType.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 my-3">Password</label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border p-2 border-[#008C99] rounded-md focus:outline-none focus:ring-2 focus:ring-[#008C99]"
                        />
                        {errors.password && (
                            <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-3 bg-[#008C99] text-white py-2 rounded-md cursor-pointer"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-[#008C99] hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}