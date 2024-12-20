"use client";

import { useState } from "react";

export default function ForgotPassword() {
  return (
    <div className="bg-white px-6 sm:py-10 lg:px-8">
      <div className="sm:mx-auto text-center sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="./img/logo.svg"
          className="mx-auto h-12 w-auto"
        />
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Forgot Password
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your email address and we'll send you a link to reset your password
        </p>
      </div>

      <form action="#" method="POST" className="mx-auto max-w-xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send Reset Link
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm/6 text-gray-500">
            Remember your password?{' '}
            <a href="/Signin" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
