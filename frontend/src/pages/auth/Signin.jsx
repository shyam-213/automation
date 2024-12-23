"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Field, Label, Switch } from "@headlessui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {


  const [email, setemail] = useState();
  const [password, setpassword] = useState()
  const navigate = useNavigate()

  const handelLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:1234/Login", { email, password })
      .then(result => {
        if (result.data === "Success") {
          navigate('/pricing')
        }
        else {
          window.alert("failed Login");
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="bg-white px-6 sm:py-10 lg:px-8">
      <div className="sm:mx-auto text-center sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="./img/logo.svg"
          className="mx-auto h-12 w-auto"
        />
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign In
        </h2>
        <p className="mt-2 text-center text-sm/6 text-gray-500">
          Sign in to your account
        </p>
      </div>

      <form action="" onSubmit={handelLogin} className="mx-auto max-w-xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
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
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter your email address"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Password
            </label>
            <div className="mt-2.5">
              <input
                id="password"
                name="password"
                type="password"
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password"
                autoComplete="password"
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
            Sign in
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm/6 text-gray-500">
            Don't have an account?{' '}
            <a href="/Signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign Up
            </a>
          </p>
          <a href="/forgotPassword" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
}
