"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

function profilePage() {
  const session = useSession();
  const { status } = session;

  const [userName, setUserName] = useState(session?.data?.user?.name || " ");

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session?.data?.user?.name);
    }
  }, [status, session]);

  async function handleProfileUpdate(e) {
    e.preventDefault();
    const update = await fetch("/api/profile", {
      method: "PUT",
      body: JSON.stringify({ name: userName }),
      headers: { "Content-Type": "application/json" },
    });
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }
  const userImage = session?.data?.user?.image;
  return (
    <section className="mt-9">
      <h1 className="text-center text-2xl font-semibold text-red-800 mb-4">
        ProfilePage
      </h1>
      <div className="max-w-md mx-auto ">
        <div className="flex gap-2 items-center">
          <div>
            <div className="p-2 rounded-lg relative">
              <Image
                src={userImage}
                width={120}
                height={200}
                alt="avatar"
                className="rounded-lg w-full h-full mb-1"
              />
              <button type="button">Edit</button>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileUpdate}>
            <input
              type="text"
              placeholder="first Name and last name"
              className="bg-red-50 text-black"
              value={userName}
              onChange={(e) => setUserName(e.target.name)}
            />
            <input
              type="email"
              name="email"
              value={session?.data?.user.email}
              disabled={true}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default profilePage;
