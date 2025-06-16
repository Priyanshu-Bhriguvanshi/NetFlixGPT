import { useForm } from "react-hook-form";
import { Input, Button } from "./index";
import authService from "../Appwrite/authUser";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Store/UserSlice";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error , setError] = useState()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const session = await authService.signInUser(data);
      if (session) {
        const userData = await authService.getCurrentUser()
        if(userData){
          dispatch(login(userData));
          navigate("/browse");
        }
      }
    } catch (error) {
      console.error("Error occurred when user tried to login", error.message);
      setError(error.message)
    }
  };

  return (
    <div className="flex items-center justify-center  bg-black opacity-85">
      <div className=" border border-gray-500 text-white p-10 rounded-lg w-96">
        <h1 className="text-3xl font-bold  mb-6">Sign In</h1>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          {/* Email Input */}
          <div>
            <Input
              className="w-full bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-red-500"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <Input
              className="w-full bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-red-500"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <Button
            name="Login"
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition duration-300 font-semibold text-lg py-2"
          />
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-400">OR</div>

        {/* Sign Up Link */}
        <p className="text-center">
          New to Netflix?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-red-500 cursor-pointer hover:underline"
          >
            Sign up now.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
