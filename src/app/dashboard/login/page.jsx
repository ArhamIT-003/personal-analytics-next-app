"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

    const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <form
        className="flex flex-col w-80 h-52 gap-5 justify-center"
        onSubmit={handleSubmit}
      >
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
          Login
        </button>
      </form>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Login;
