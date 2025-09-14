import React, { useState } from "react";
import { client } from "../lib/index.js"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router";



const formSchema = z.object({
  username: z.string().min(1, "User Name is required"),
  password: z.string().min(1, "Password is required"),
});

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  async function submitForm(data) {
    
    try{
      const res = await client.post("/user/login" ,{"username": data.username, "password": data.password})
      if(res?.status === 200){
        localStorage.setItem("jwttoken", res?.data?.accessToken)
        
        navigate("/home");
      }else{
        setError(true)
      }
    }catch{
      setError(true)
    }
    
  }

  return (
    <div className="flex  justify-center gap-20 pb-30">
    <img src="/Group 91.png" alt="img" />
    <div
      className="flex flex-col items-center justify-center"
      style={{
        border: "1px solid #CACACA",
        width: "380px",
        padding: "40px 40px",
        marginTop: "150px",
        height:'425px'
      }}
    >
      <img className="p-5 py-4" src="/insta logo.png" alt="logo" />

      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col gap-4 w-full"
      >
        <input
          {...register("username")}
          placeholder="User Name"
          className="border border-gray-300 rounded px-3 py-2 text-gray-700"
        />
        {errors.username && (
          <span className="text-red-600 text-sm">{errors.username.message}</span>
        )}

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded px-3 py-2 text-gray-700"
        />
        {errors.password && (
          <span className="text-red-600 text-sm">{errors.password.message}</span>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white rounded py-2 mt-2 font-semibold"
        >
          Log in
        </button>
      </form>

      <p className="mt-8 text-gray-700 py-10">
        Don’t have an account?{" "}
        <Link to='/user/signup' className="text-blue-500 font-semibold">Sign up</Link>
      </p>
      {error ? <p className="text-red-600">Your Username or Password is wrong</p>:null}
    </div>
    </div>
  );
}
