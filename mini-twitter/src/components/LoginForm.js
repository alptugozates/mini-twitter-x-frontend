import React from "react";
import { useForm } from "react-hook-form";
import { FaTwitter } from "react-icons/fa";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="w-full flex flex-col max-w-md p-8 bg-white rounded shadow-lg">
        <div className="flex flex-col items-start justify-start gap-6">
          <FaTwitter className="text-4xl text-turquoise" />
          <h2 className="mb-6 text-2xl font-extrabold font-montserrat  text-center">
            Log in to Twitter
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              id="email"
              type="text"
              {...register("email", { required: "This field is required" })}
              placeholder="Phone number, email address"
              className={`mt-1 block w-full px-6 py-4 bg-white border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300`}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <input
              id="password"
              type="password"
              {...register("password", { required: "This field is required" })}
              placeholder="Password"
              className={`mt-1 block w-full px-6 py-4 bg-white border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300`}
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full font-montserrat font-semibold px-6 py-3 text-white bg-turquoise rounded-xl hover:bg-turquoise-400 duration-300 focus:outline-none focus:bg-turquoise-700"
          >
            Log In
          </button>

          <div className="flex items-center justify-between mb-4 mt-8 font-montserrat text-turquoise">
            <a href="#" className="text-sm  hover:underline">
              Forgot password?
            </a>
            <a href="#" className="text-sm hover:underline">
              Sign up to Twitter
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
