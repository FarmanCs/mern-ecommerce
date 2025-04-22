"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [createdUser, setCreatedUser] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(ev) {
    ev.preventDefault();
    // setCreatingUser(true);
    // setError(false);
    // setCreatedUser(false);
    to;
    const { ok } = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      // headers: { "Content-Type": "application/json" },//can work with out seting the headers menually
    });
    if (ok) {
      setCreatedUser(true);
    } else {
      setError(true);
    }

    setCreatingUser(false);
    // setCreatedUser(true);
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-2xl font-semibold text-red-800 mb-4">
        Register
      </h1>
      {createdUser && (
        <div className="my-4 text-center">
          user created <br /> now you can{" "}
          <Link className="underline" href={"/login"}>
            login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          Error.
          <br />
          please try agin latter
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          disabled={creatingUser}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          disabled={creatingUser}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="text-center text-gray-400 my-2">
          or login another way
        </div>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex gap-4 justify-center  hover:bg-gray-200"
        >
          <Image src={"/google.svg"} alt="" width={25} height={20} />
          login with Google
        </button>
        <div className="text-center my-4 text-gray-500  pt-4 border-t">
          Existeing accoutn? {""}
          <Link className="underline" href={"/login"}>
            Loign &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}

export default RegisterPage;
