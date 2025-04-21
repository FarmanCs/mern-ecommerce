"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";

function Header() {
  // const { data: session, status } = useSession();
  const session = useSession();
  const status = session?.status;
  console.log({ session, status });
  let userName = session?.data?.user.name;
  const userEmail = session?.data?.user.email;
  // const userName = data.name;
  console.log({ userEmail, userName });
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }
  return (
    <header className="flex items-center content-center justify-between px-2">
      <nav className="flex items-center gap-14 pl-1 text-gray-700 font-semibold">
        <Link className="text-red-700 font-semibold text-2xl" href="/">
          PIZZA Corner
        </Link>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        {status === "authenticated" && (
          <>
            <Link href={"/profile"} className="whitespace-nowrap">
              Hello {userName}
            </Link>
            <button
              onClick={() => signOut()}
              className="hover:text-red-800 rounded-full hover:cursor-pointer hover:bg-neutral-50"
            >
              Log Out
            </button>
          </>
        )}
        {status === "unauthenticated" && (
          <>
            <Link
              href={"/login"}
              className="hover:text-black hover:font-extrabold text-center font-bold"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-red-800 text-gray-950 hover:text-white px-4 rounded-full"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
