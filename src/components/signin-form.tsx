"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="lg:w-1/2 flex justify-center items-center bg-white p-6 lg:p-0">
      <div className="w-full max-w-md">
        <h2 className="text-xl lg:text-2xl font-bold mb-6 text-center text-black">
          Sign in
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className={`mt-1 block w-full px-3 py-2 border text-black ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              {...register("email")}
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message as string}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`mt-1 block w-full px-3 py-2 text-black border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              {...register("password")}
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember Password
              </label>
            </div>

            <div className="text-sm mt-2 sm:mt-0">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-black">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600">
              Sign up
            </a>
          </p>
        </div>

        <div className="flex items-center mt-6">
          <div className="border-t border-gray-300 w-full"></div>
          <p className="px-2 text-gray-600 text-sm">Or</p>
          <div className="border-t border-gray-300 w-full"></div>
        </div>

        <div className="mt-4 flex justify-center">
          <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21.35 11.1h-9.18v2.76h5.47c-.22 1.19-.94 2.2-1.92 2.88v2.4h3.11c1.81-1.67 2.87-4.13 2.87-6.96 0-.67-.06-1.33-.18-1.98zM12.17 19.2c-3.36 0-6.19-2.22-7.2-5.22l-3.09 2.37c1.58 3.1 4.86 5.27 8.64 5.27 2.45 0 4.69-.84 6.46-2.25l-3.11-2.4c-.85.58-1.9.93-3.04.93zM4.97 9.18c-.48 1.42-.48 2.98 0 4.41l3.09-2.37c-.14-.49-.14-1.01 0-1.5l-3.09-2.37c-.07.28-.13.58-.13.88zM12.17 4.8c1.13 0 2.19.39 3.04.93l3.11-2.4c-1.78-1.41-4.02-2.25-6.46-2.25-3.78 0-7.06 2.17-8.64 5.27l3.09 2.37c1.01-3 3.84-5.22 7.2-5.22z" />
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
