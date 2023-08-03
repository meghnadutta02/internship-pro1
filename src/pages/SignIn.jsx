import React, { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase"
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { signInWithEmailAndPassword } from "firebase/auth";
import OAuth from "../components/OAuth";
const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, formData.email, formData.password)
      if (result.user) {
        setIsLoading(false);
        navigate("/")
      }
    } catch (error) {
      setIsLoading(false);
      switch (error.code) {
        case 'auth/invalid-email':
          toast.error('Invalid email format.');
          break;
        case 'auth/user-disabled':
          toast.error('The user account has been disabled.');
          break;
        case 'auth/user-not-found':
          toast.error('User with the provided email not found.');
          break;
        case 'auth/wrong-password':
          toast.error('Incorrect password.');
          break;
        default:
          toast.error('An error occurred during sign-in. Please try again later.');
          break;
      }

    }
  }

  if (isLoading) return <Spinner />
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md h-[70%] sm:w-[80%] w-[93%] mx-auto p-6 mt-[8%] md:mt-[5%] sm:shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="email"
              onChange={handleChange}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6 relative">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>

            <input
              className="relative appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="password"
              onChange={handleChange}
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
            />

            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={handlePasswordVisibility}
            >
              {passwordVisible ? (
                <RiEyeOffFill className="text-gray-500" />
              ) : (
                <RiEyeFill className="text-gray-500" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center text-sm sm:text-lg">


            <div className="inline-block text-right align-baseline font-bold text-sm text-blue-500 sm:whitespace-nowrap">
              Don't have an account?{" "}
              <Link to="/register" className="text-red-500 font-semibold">
                Register
              </Link>
            </div>
          </div>
          <button
            className="bg-blue-500 w-full hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out mt-6"
            type="submit"
          >
            Sign in
          </button>

          <div className="text-center my-3 text-gray-400 relative">OR</div>

          <OAuth />
        </form>
      </div>
    </div>
  );
};

export default SignIn;