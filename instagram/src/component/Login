import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(1, "User Name is required"),
  password: z.string().min(1, "Password is required"),
});

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  function submitForm(data) {
    console.log("Form submitted:", data);
  }

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        border: "2px solid #ff33cc",
        width: "320px",
        padding: "40px 30px",
        margin: "auto",
        marginTop: "80px",
        borderRadius: "8px",
      }}
    >
      <h1 style={{ fontFamily: "cursive", fontSize: "32px", marginBottom: "30px" }}>
        Instagram
      </h1>

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

      <p className="mt-8 text-gray-700">
        Don’t have an account?{" "}
        <a href="#" className="text-blue-500 font-semibold">
          Sign up
        </a>
      </p>
    </div>
  );
}
