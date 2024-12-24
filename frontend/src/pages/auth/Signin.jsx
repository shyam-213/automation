import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/store/auth-slice";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons

function Signin() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();

  function handelLogin(e) {
    e.preventDefault();
    if (email == "" || password == "") {
      toast({
        title: 'Please fill all the fields',
        variant: 'destructive',
      });
      return;
    }

    dispatch(login({ email, password })).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message || "Login Successful"
        });
        navigate('/pricing');
      }
      else {
        toast({
          title: data?.payload?.message || "Login Failed",
          variant: "destructive",
        });
      }
    });
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

      <form
        action="#"
        onSubmit={handelLogin}
        className="mx-auto max-w-xl sm:mt-10"
      >
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
                onClick={(e) => setemail(e.target.value)}
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
            <div className="relative mt-2.5">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                onClick={(e) => setpassword(e.target.value)}
                placeholder="Password"
                autoComplete="password"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5" />
                ) : (
                  <FaEye className="h-5 w-5" />
                )}
              </button>
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
            Don't have an account?{" "}
            <a
              href="/Signup"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </a>
          </p>
          <a
            href="/forgotPassword"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Signin;
