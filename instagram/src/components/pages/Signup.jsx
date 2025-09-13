import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router";
import { client } from "../lib";
import { Link } from "react-router";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  username: z.string().min(1, "User Name is required"),
  password: z.string().min(1, "Password is required"),
});

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false)
  const navigate = useNavigate();


  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  async function submitForm(data) {
      console.log(data)
      try{
        const res = await client.post("/user/signup" ,{"username": data.username, "password": data.password, "email":data.email})
        if(res?.status === 200){
          navigate("/user/login");
        }else{
          console.log(res?.status)
          setError(true)
        }
      }catch{
        setError(true)
      }
      
  }

  return (
    <div className="w-[400px] mx-auto mt-36 p-9 border border-gray-300  bg-white font-sans">
       <img className="px-6 pb-2 " src="/insta logo.png" alt="logo" />

      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-4">
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
        {errors.email && (
          <span className="text-red-600 text-sm">{errors.email.message}</span>
        )}

        <input
          {...register("username")}
          type="text"
          placeholder="User Name"
          className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
        {errors.username && (
          <span className="text-red-600 text-sm">{errors.username.message}</span>
        )}

        <div className="relative">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-sm hover:text-gray-700"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && (
          <span className="text-red-600 text-sm">{errors.password.message}</span>
        )}

        <button
          type="submit"
          className="bg-sky-500 text-white rounded-md py-3 mt-2 font-semibold w-full hover:bg-sky-600 transition"
        >
          Sign up
        </button>
      </form>

      <p className="mt-8 text-gray-700 text-center text-sm">
        Already have an account?{" "}
        <Link to='/user/login' className="text-blue-500 font-semibold">Log in</Link>
      </p>
      {error ? <p className="text-red-600">User Already exist</p>:null}
    </div>
  );
}
