"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form
        className="flex flex-col w-80 h-80 gap-5 justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="bg-transparent border-2 p-4 rounded-md"
          placeholder="Username"
          name="username"
        />
        <input
          type="email"
          className="bg-transparent border-2 p-4 rounded-md"
          placeholder="Email"
          name="email"
        />
        <input
          type="password"
          className="bg-transparent border-2 p-4 rounded-md"
          placeholder="Password"
          name="password"
        />
        <button className="cursor-pointer bg-button-bg text-button-text px-4 py-2 rounded-md border-none text-sm">
          Register
        </button>
      </form>
      {err && <p className="text-red-500">Something went wrong!</p>}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
};

export default Register;
