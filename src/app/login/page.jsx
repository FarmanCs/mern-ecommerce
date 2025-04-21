"use client";
import { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoginInProgress(true);
    setError("");

    try {
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
      });

      if (res?.error) {
        setError(res.error);
      } else {
        router.push("/");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoginInProgress(false);
    }
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-2xl font-semibold text-red-800 mb-4">
        Login
      </h1>
      {error && <div className="my-4 text-center text-red-500">{error}</div>}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          disabled={loginInProgress}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          disabled={loginInProgress}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md"
        />
        <button
          disabled={loginInProgress}
          type="submit"
          className="w-full bg-red-700 text-white p-2 rounded-md hover:bg-red-800 disabled:bg-gray-400"
        >
          {loginInProgress ? "Logging in..." : "Login"}
        </button>
        <div className="text-center text-gray-400 my-2">
          or login another way
        </div>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex gap-4 justify-center items-center w-full p-2 border rounded-md hover:bg-gray-200"
          type="button"
        >
          <Image src={"/google.svg"} alt="google" width={25} height={20} />
          Login with Google
        </button>
        <div className="text-center my-4 text-gray-500 pt-4 border-t">
          Don't have an account?{" "}
          <Link className="underline" href={"/register"}>
            Register &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}

export default LoginPage;
