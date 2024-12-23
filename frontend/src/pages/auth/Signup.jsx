"use client";

import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'



export default function Signup() {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const [firstName, setfirstName] = useState()
  const [lastName, setlastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [cpassword, setcpassword] = useState()

  const handelSignUp = (e) => { 
    e.preventDefault();
    if (password == cpassword)
    {
      axios.post("http://localhost:1234/SignUp", { firstName, lastName, email, password })
        .then(result => {
          if (result.status == 201) {
            console.log("Success");
            navigate('/Signin');
          }
        })
        .catch(err => {
          if (err.response && err.response.status === 400) {
            window.alert("exiest");
          }
          else {
            console.log(err);
          }
        })
    }
    else
    {
      window.alert("Password dose not match");
      }
    
  }


  return (
    <div className="bg-white px-6 sm:py-10 lg:px-3">
      <div className="sm:mx-auto text-center sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="./img/logo.svg"
          className="mx-auto h-12 w-auto"
        />
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Create an Account
        </h2>
        <p className="mt-2 text-center text-sm/6 text-gray-500">
          Create an account to get started with your free trial
        </p>
      </div>

      <form action="" onSubmit={handelSignUp} className="mx-auto max-w-xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={(e) =>setfirstName(e.target.value)}
                placeholder="Enter your first name"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={(e)=>setlastName(e.target.value)}
                placeholder="Enter your last name"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

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
                onChange={(e)=>setEmail(e.target.value)}
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
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Create a password"
                autoComplete="new-password"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2.5">
              <input
                id="cnfPassword"
                name="cnfPassword"
                type="password"
                onChange={(e) => setcpassword(e.target.value)}
                placeholder="Confirm your password"
                autoComplete="new-password"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="flex items-center gap-x-3">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <a href="/terms" className="font-semibold text-indigo-600 hover:text-indigo-500">Terms and Conditions</a>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={!agreed}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400"
          >Sign up</button>
        </div>

        <p className="mt-6 text-center text-sm/6 text-gray-500">
          Already have an account?{' '}
          <a href="/Signin" className="font-semibold text-indigo-600 hover:text-indigo-500">Sign In</a>
        </p>
      </form>
    </div>
  );
}
